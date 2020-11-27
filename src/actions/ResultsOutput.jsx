import actionTypes from "./actionTypes";


export const changeMeasurement = (id, measurements) => {
  return {
    type: actionTypes.OUTPUT_MEASUREMENT_CHANGED,
    id,
    payload: {
    measurement: measurements.measurement,
    downMeasurement: measurements.oneDown,
    upMeasurement: measurements.oneUp,
    decimalResult: measurements.decResult,
    fractionalResult: measurements.fracResult,
    
    }
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
