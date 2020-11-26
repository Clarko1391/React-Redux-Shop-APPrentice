import React from "react";
import * as resultsActions from "../actions/ResultsOutput";
import { connect } from "react-redux";
import { fraction, number, floor, round } from 'mathjs'
import MeasurementConverter from "../components/MeasurementConverter";
import deepClone from 'lodash.clonedeep';

class MeasurementConverterContainer extends React.Component {
  constructor(props) {
    super(props)

    this.internalProps = deepClone(props);
    this.convertMeasurement = this.convertMeasurement.bind(this);
  };

  convertMeasurement() {
    let userInput = this.internalProps.userInput;
    const fractionValidate = this.internalProps.userInput.split("");
    const conversionUnit = this.internalProps.conversionUnit;

    let convertValidate = true, measurement;

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
    switch (conversionUnit) {
      case ("mm to Inches"):
        // build an oject with measurements that you are going to trigger an action with
        this.internalProps.updateDecimalMM(measurement.toString());
        break;
      case ("Inches to mm"):
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


  render() {
    return (
      <>
        <MeasurementConverter convertMeasurement={this.convertMeasurement} />
      </>
    );
  }
}

// Use variables instead of state hooks within the container scope. Send a props object to output container and let it handle its own state dispatch / update


// const [userInput, setUserInput] = useState("");
//     const [conversionUnit, setConvertUnitValue] = useState('MMtoInches');
//     const [decMM, setDecMM] = useState("Measurement");
//     const [decMMUp, setDecMMUp] = useState("+ 1");
//     const [decMMDown, setDecMMDown] = useState("- 1");
//     const [decInch, setDecInch] = useState("Measurement");
//     const [decInchUp, setDecInchUp] = useState("+ 1");
//     const [decInchDown, setDecInchDown] = useState("- 1");
//     const [fracInch, setFracInch] = useState("Measurement");
//     const [fracInchUp, setFracInchUp] = useState("+ 1");
//     const [fracInchDown, setFracInchDown] = useState("- 1");
//     const outputHeaders = { decMM:"Decimal (mm)", decInch: "Decimal (inch)", fracInch: "Fractional (inch)"}

//     // Functions
//     let measurement, oneUp, oneDown, answer, answerUp, answerDown;
//     let fractionValidate = userInput.split("");
//     let convertValidate;

//     const convert = () => {
//         // Prep userInput for math operations
//         
//         }

//         // Use conversionUnit to perform conversion
//         if (convertValidate) {
//             switch (conversionUnit) {
//                 case ("MMtoInches"):
//                     oneUp = (measurement + 1);
//                     oneDown = (measurement - 1);
//                     answer = measurement * .0393701;
//                     answerUp = oneUp * .0393701;
//                     answerDown = oneDown * .0393701;
//                     outputConversionMetric();
//                     break;
//                 case ("inchesToMM"):
//                     oneUp = (measurement + .0625);
//                     oneDown = (measurement - .0625);
//                     answer = measurement / .0393701;
//                     answerUp = oneUp / .0393701;
//                     answerDown = oneDown / .0393701;
//                     outputConversionSAE();
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     const outputConversionMetric = () => {
//         setDecMM(measurement);
//         setDecMMUp(+oneUp.toFixed(2));
//         setDecMMDown(+oneDown.toFixed(2));
//         setDecInch(+answer.toFixed(2));
//         setDecInchUp(+answerUp.toFixed(2));
//         setDecInchDown(+answerDown.toFixed(2));

//         fracConvert(answer, setFracInch);
//         fracConvert(answerUp, setFracInchUp);
//         fracConvert(answerDown, setFracInchDown);
//     }

//     const outputConversionSAE = () => {
//         setDecInch(measurement);
//         setDecInchUp(+oneUp.toFixed(2));
//         setDecInchDown(+oneDown.toFixed(2));
//         setDecMM(+answer.toFixed(2));
//         setDecMMUp(+answerUp.toFixed(2));
//         setDecMMDown(+answerDown.toFixed(2));

//         fracConvert(measurement, setFracInch);
//         fracConvert(oneUp, setFracInchUp);
//         fracConvert(oneDown, setFracInchDown);
//     }

//     //Display decimal remainders as fractions in 16ths of an inch as well as converting to the lowest common denominator of the fraction
//     // Declare local variables to keep them from becoming globals, write parameters to new variables for better readability
//     const fracConvert = (value, setState) => {
//         let decimalNum = value;
//         let decValue = decimalNum - floor(decimalNum);
//         let wholeNum = floor(decimalNum);
//         let fracNum = round(decValue * 16);

//         if (fracNum === 16 || fracNum === 0) {
//             fracNum = ``;
//         } else if (fracNum > 0 && fracNum % 8 === 0) {
//             fracNum = `1/2`;
//         } else if (fracNum > 0 && fracNum % 4 === 0) {
//             fracNum = `${fracNum / 4}/4`;
//         } else if (fracNum > 0 && fracNum % 2 === 0) {
//             fracNum = `${fracNum / 2}/8`;
//         } else {
//             fracNum = `${fracNum}/16`;
//         }

//         if (wholeNum > 0) {
//             setState(`${wholeNum} ${fracNum}`);
//         } else {
//             setState(`${fracNum}`);
//         }

//     }

const mapStateToProps = (state) => {
  let mcUserInput = "default";
  let mcConversionInput = "default";
  if (
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
    mcConversionInput = state.UserInputDropdown.inputsDropdown.mcConversionInput.userInput;
  }
  return {
    userInput: mcUserInput,
    conversionUnit: mcConversionInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecimalMM: (measurement) => {
      dispatch(resultsActions.changeMeasurement('mcDecMMOutput',measurement));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasurementConverterContainer);
