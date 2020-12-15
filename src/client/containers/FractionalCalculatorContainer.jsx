import { connect } from "react-redux";
import FractionalCalculator from "../components/FractionalCalculator";
import React from "react";
import * as resultsActions from "../actions/ResultsOutput";
import * as inputActions from "../actions/UserInputNumeric";
import { fraction, number, floor, round } from "mathjs";
import deepClone from "lodash.clonedeep";

class FractionalCalculatorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = deepClone(props);
    this.calculateValue = this.calculateValue.bind(this);
    this.clearNumericInput1 = this.clearNumericInput1.bind(this);
    this.clearNumericInput2 = this.clearNumericInput2.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userInput1 !== this.internalProps.userInput1) {
      console.log("userInput1 has changed!");
      this.internalProps.userInput1 = nextProps.userInput1;
    }
    if (nextProps.userInput2 !== this.internalProps.userInput2) {
      console.log("userInput1 has changed!");
      this.internalProps.userInput2 = nextProps.userInput2;
    }
    if (nextProps.calculationUnit !== this.internalProps.calculationUnit) {
      console.log("calculationUnit has changed!");
      this.internalProps.calculationUnit = nextProps.calculationUnit;
    }
    return true;
  }

  calculateValue() {
    let userInput1 = this.internalProps.userInput1;
    let userInput2 = this.internalProps.userInput2;
    const fractionValidate1 = this.internalProps.userInput1.split("");
    const fractionValidate2 = this.internalProps.userInput2.split("");
    const calculationUnit = this.internalProps.calculationUnit;
    let calcValidate = true;

    if (fractionValidate1.includes("/")) {
      const temp1 = fraction(userInput1);
      userInput1 = temp1;
    }
    if (fractionValidate2.includes("/")) {
      const temp2 = fraction(userInput2);
      userInput2 = temp2;
    }
    if (isNaN(userInput1) || isNaN(userInput2)) {
      alert("You must enter valid numbers in both inputs");
      calcValidate = false;
    } else {
      userInput1 = number(userInput1);
      userInput2 = number(userInput2);
    }
    if (calcValidate) {
      this.updateOutput(calculationUnit, userInput1, userInput2);
    }
  }

  clearNumericInput1() {
    let clearInput = "";
    let id = "fcInput1";

    this.internalProps.clearNumericInput(id, clearInput);
  }

  clearNumericInput2() {
    let clearInput = "";
    let id = "fcInput2";

    this.internalProps.clearNumericInput(id, clearInput);
  }

  clearAll() {
    let clearInput = "";
    let id1 = "fcInput1";
    let id2 = "fcInput2";
    let results = {
      decResult: "Decimal Result",
      fracResult: "Fractional Result",
    }

    this.internalProps.clearNumericInput(id1, clearInput);
    this.internalProps.clearNumericInput(id2, clearInput);
    this.internalProps.updateResult(results)
  }

  updateOutput = (calculationValue, userInput1, userInput2) => {
    let decResult, fracResult;

    // Define fractional display function
    const calcFracConvert = (calcResult) => {
      let calcDecimal = calcResult - floor(calcResult);
      let calcWhole = floor(calcResult);
      let calcNumerator = round(calcDecimal * 16);
      let calcFractionWrite = "";

      // Check for LCD and convert to mixed number in template literal
      if (calcNumerator === 16) {
        calcFractionWrite = "";
      } else if (calcNumerator > 0 && calcNumerator % 8 === 0) {
        calcFractionWrite = "1/2";
      } else if (calcNumerator > 0 && calcNumerator % 4 === 0) {
        calcFractionWrite = `${calcNumerator / 4}/4`;
      } else if (calcNumerator > 0 && calcNumerator % 2 === 0) {
        calcFractionWrite = `${calcNumerator / 2}/8`;
      } else if (calcNumerator > 0) {
        calcFractionWrite = `${calcNumerator}/16`;
      } else calcFractionWrite = "";

      // Write as mixed number if calcResult > 1 or fraction if calcResult < 1
      if (calcWhole > 0) {
        return `${calcWhole} ${calcFractionWrite}`;
      } else {
        return `${calcFractionWrite}`;
      }
    };

    const updateOutput = (decResult, fracResult) => {
      let results = {
        decResult: decResult.toString(),
        fracResult: fracResult,
      }
      this.internalProps.updateResult(results)
    }
    
    switch (calculationValue) {
      case "+":
      decResult = number(userInput1 + userInput2);
      fracResult = calcFracConvert(decResult);

      updateOutput(decResult, fracResult);
      break;
      case "-":
      decResult = number(userInput1 - userInput2);
      fracResult = calcFracConvert(decResult);

      updateOutput(decResult, fracResult);
      break;
      case "x":
      decResult = number(userInput1 * userInput2);
      fracResult = calcFracConvert(decResult);

      updateOutput(decResult, fracResult);
      break;
      case "/":
      decResult = number(userInput1 / userInput2);
      fracResult = calcFracConvert(decResult);

      updateOutput(decResult, fracResult);
      break;
      default:
      break;
    }
  };

  render() {
    return <FractionalCalculator calculateValue={this.calculateValue} clearNumericInput1={this.clearNumericInput1} clearNumericInput2={this.clearNumericInput2} clearAll={this.clearAll} />;
  }
}

const mapStateToProps = (state) => {
  let fcUserInput1 = "default";
  let fcUserInput2 = "default";
  let fcCalculationInput = "default";
  if (
    state.UserInputNumeric &&
    state.UserInputNumeric.inputsNUM &&
    state.UserInputNumeric.inputsNUM.fcInput1 &&
    state.UserInputNumeric.inputsNUM.fcInput1.userInput
  ) {
    fcUserInput1 = state.UserInputNumeric.inputsNUM.fcInput1.userInput;
  }
  if (
    state.UserInputNumeric &&
    state.UserInputNumeric.inputsNUM &&
    state.UserInputNumeric.inputsNUM.fcInput2 &&
    state.UserInputNumeric.inputsNUM.fcInput2.userInput
  ) {
    fcUserInput2 = state.UserInputNumeric.inputsNUM.fcInput2.userInput;
  }
  if (
    state.UserInputDropdown &&
    state.UserInputDropdown.inputsDropdown &&
    state.UserInputDropdown.inputsDropdown.fcCalculationInput &&
    state.UserInputDropdown.inputsDropdown.fcCalculationInput.userInput
  ) {
    fcCalculationInput =
      state.UserInputDropdown.inputsDropdown.fcCalculationInput.userInput;
  }
  return {
    userInput1: fcUserInput1,
    userInput2: fcUserInput2,
    calculationUnit: fcCalculationInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateResult: (measurements) => {
      dispatch(resultsActions.changeMeasurement("fcResultsOutput", measurements));
    },
    clearNumericInput: (id, clearValue) => {
      dispatch(
      inputActions.inputCleared(id, clearValue)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FractionalCalculatorContainer);
