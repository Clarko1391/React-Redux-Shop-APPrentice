import actionTypes from "../actions/actionTypes";

const initialState = {};

const outputInitialized = (state, action) => {
  console.log("Output initialized");
  return {
    ...state,
    outputs: {
      ...state.outputs,
      [action.id]: {
        ...action.payload,
      },
    },
  };
};

const outputMeasurementChanged = (state, action) => {
  console.log("Output changed");
  return {
    ...state,
    outputs: {
      ...state.outputs,
      [action.id]: {
        ...state.outputs[action.id],
        ...action.payload,
      },
    },
  };
};

const ResultsOutput = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OUTPUT_INITIALIZED:
      return outputInitialized(state, action);
    case actionTypes.OUTPUT_MEASUREMENT_CHANGED:
      return outputMeasurementChanged(state, action);
    default:
      return state;
  }
};

export default ResultsOutput;
