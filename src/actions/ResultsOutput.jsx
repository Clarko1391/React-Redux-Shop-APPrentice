import actionTypes from "./actionTypes";


export const changeMeasurement = (id, measurement) => {
  return {
    type: actionTypes.OUTPUT_MEASUREMENT_CHANGED,
    id,
    measurement
  };
};

export const outputInitialized = (props) => {
  return {
    type: actionTypes.OUTPUT_INITIALIZED,
    id: props.outputId,
    payload: {
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
