import actionTypes from "./actionTypes";

export const outputInitialized = (props) => {
  return {
    type: actionTypes.OUTPUT_INITIALIZED,
    payload: {
      outputId: props.outputId,
      outputType: props.outputType,
      header: props.header,
      downMeasurement: props.downMeasurement,
      measurement: props.measurement,
      upMeasurement: props.upMeasurement,
      decimalResult: props.decimalResult,
      fractionalResult: props.fractionalResult,
    },
  };
};
