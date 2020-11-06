import actionTypes from "../actions/actionTypes";

const initialState = {};

const outputInitialized = (state, action) => {
  console.log("Output initialized!");
  return {
    ...state,
    outputs: {
      ...state.outputs,
      [action.payload.outputId]: {
        converter: action.payload.converter,
        calculator: action.payload.calculator,
        header: action.payload.header,
        downMeasurement: action.payload.downMeasurement,
        measurement: action.payload.measurement,
        upMeasurement: action.payload.upMeasurement,
        decimalResult: action.payload.decimalResult,
        fractionalResult: action.payload.fractionalResult,
      },
    },
  };
};

const ResultsOutput = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OUTPUT_INITIALIZED:
      return outputInitialized(state, action);
    default:
      return state;
  }
};

export default ResultsOutput;
