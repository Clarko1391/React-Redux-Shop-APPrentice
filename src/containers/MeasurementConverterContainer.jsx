import React from "react";
import * as resultsActions from "../actions/ResultsOutput";
import * as inputActions from "../actions/UserInputNumeric";
import { connect } from "react-redux";
import { fraction, number, floor, round } from "mathjs";
import MeasurementConverter from "../components/MeasurementConverter";
import deepClone from "lodash.clonedeep";

class MeasurementConverterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = deepClone(props);
    this.convertMeasurement = this.convertMeasurement.bind(this);
    this.clearConverter = this.clearConverter.bind(this);
  }

  convertMeasurement() {
    let userInput = this.internalProps.userInput;
    const fractionValidate = this.internalProps.userInput.split("");
    const conversionUnit = this.internalProps.conversionUnit;

    let convertValidate = true,
      measurement;

    if (fractionValidate.includes("/") && conversionUnit === "MMtoInches") {
      alert("please enter whole number metric values only");
      convertValidate = false;
    } else if (fractionValidate.includes("/")) {
      const temp = fraction(userInput);
      userInput = temp;
    }
    if (isNaN(userInput)) {
      alert("Measurement should be a number or a fraction");
      convertValidate = false;
    } else {
      measurement = number(userInput);
    }

    if (convertValidate) {
      this.updateOutput(conversionUnit, measurement);
    }
  }

  updateOutput(conversionUnit, measurement) {
    //Initialize variables for switch statement to build output objects
    let oneUp, oneDown, decMMOutputs, decInchOutputs, fracInchOutputs;

    // Converts numbers into fractions in LCD and returns template string as output
    const fracConvert = (value) => {
      let decimalNum = value;
      let decValue = decimalNum - floor(decimalNum);
      let wholeNum = floor(decimalNum);
      let fracNum = round(decValue * 16);

      if (fracNum === 16 || fracNum === 0) {
        fracNum = ``;
      } else if (fracNum > 0 && fracNum % 8 === 0) {
        fracNum = `1/2`;
      } else if (fracNum > 0 && fracNum % 4 === 0) {
        fracNum = `${fracNum / 4}/4`;
      } else if (fracNum > 0 && fracNum % 2 === 0) {
        fracNum = `${fracNum / 2}/8`;
      } else {
        fracNum = `${fracNum}/16`;
      }

      if (wholeNum > 0) {
        return `${wholeNum} ${fracNum}`;
      } else {
        return `${fracNum}`;
      }
    };

    // Builds ouput objects to send to ResultsOutputContainer actions / reducers to modify appropriate states
    switch (conversionUnit) {
      case "mm to Inches":
        // build an oject with measurements that you are going to trigger an action with

        oneUp = measurement + 1;
        oneDown = measurement - 1;

        decMMOutputs = {
          measurement: measurement.toString(),
          oneUp: oneUp.toString(),
          oneDown: oneDown.toString(),
        };
        decInchOutputs = {
          measurement: (+(measurement * 0.0393701).toFixed(2)).toString(),
          oneUp: (+(oneUp * 0.0393701)).toFixed(2).toString(),
          oneDown: (+(oneDown * 0.0393701)).toFixed(2).toString(),
        };
        fracInchOutputs = {
          measurement: fracConvert(measurement * 0.0393701),
          oneUp: fracConvert(oneUp * 0.0393701),
          oneDown: fracConvert(oneDown * 0.0393701),
        };
        this.internalProps.updateDecimalMM(decMMOutputs);
        this.internalProps.updateDecimalInch(decInchOutputs);
        this.internalProps.updateFracInch(fracInchOutputs);
        break;
      case "Inches to mm":
        oneUp = measurement + 0.0625;
        oneDown = measurement - 0.0625;

        decMMOutputs = {
          measurement: (+(measurement / 0.0393701).toFixed(2)).toString(),
          oneUp: (+(oneUp / 0.0393701)).toFixed(2).toString(),
          oneDown: (+(oneDown / 0.0393701)).toFixed(2).toString(),
        };
        decInchOutputs = {
          measurement: measurement.toString(),
          oneUp: oneUp.toString(),
          oneDown: oneDown.toString(),
        };
        fracInchOutputs = {
          measurement: fracConvert(measurement),
          oneUp: fracConvert(oneUp),
          oneDown: fracConvert(oneDown),
        };
        this.internalProps.updateDecimalMM(decMMOutputs);
        this.internalProps.updateDecimalInch(decInchOutputs);
        this.internalProps.updateFracInch(fracInchOutputs);
        break;
      default:
        break;
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userInput !== this.internalProps.userInput) {
      console.log("userInput has changed!");
      this.internalProps.userInput = nextProps.userInput;
    }
    if (nextProps.conversionUnit !== this.internalProps.conversionUnit) {
      console.log("conversionUnit has changed!");
      this.internalProps.conversionUnit = nextProps.conversionUnit;
    }
    return true;
  }

  clearConverter() {
    let clearInput = "";

    let clearOutputs = {
      measurement: "measurement",
      oneUp: "+1",
      oneDown: "-1",
    };
    this.internalProps.clearNumericInput(clearInput);
    this.internalProps.updateDecimalMM(clearOutputs);
    this.internalProps.updateDecimalInch(clearOutputs);
    this.internalProps.updateFracInch(clearOutputs);
  }

  render() {
    return (
      <>
        <MeasurementConverter convertMeasurement={this.convertMeasurement} clearConverter={this.clearConverter}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let mcUserInput = "default";
  let mcConversionInput = "default";
  if (
    state.UserInputNumeric &&
    state.UserInputNumeric.inputsNUM &&
    state.UserInputNumeric.inputsNUM.mcUserInput.userInput
  ) {
    mcUserInput = state.UserInputNumeric.inputsNUM.mcUserInput.userInput;
  }
  if (
    state.UserInputDropdown &&
    state.UserInputDropdown.inputsDropdown &&
    state.UserInputDropdown.inputsDropdown.mcConversionInput.userInput
  ) {
    mcConversionInput =
      state.UserInputDropdown.inputsDropdown.mcConversionInput.userInput;
  }
  return {
    userInput: mcUserInput,
    conversionUnit: mcConversionInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecimalMM: (measurements) => {
      dispatch(resultsActions.changeMeasurement("mcDecMMOutput", measurements));
    },
    updateDecimalInch: (measurements) => {
      dispatch(
        resultsActions.changeMeasurement("mcDecInchOutput", measurements)
      );
    },
    updateFracInch: (measurements) => {
      dispatch(
        resultsActions.changeMeasurement("mcFracInchOutput", measurements)
      );
    },
    clearNumericInput: (clearValue) => {
      dispatch(
      inputActions.inputCleared("mcUserInput", clearValue)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasurementConverterContainer);
