import actionTypes from "./actionTypes";



export const chartInitialized = (props) => {
  return {
    type: actionTypes.CHART_INITIALIZED,
    id: props.referenceId,
    payload: {
      referenceType: props.referenceType,
      chartTitle: props.chartTitle,
    },
  };
};