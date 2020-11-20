import { connect } from "react-redux";
import ReferencePage from "../components/ReferencePage";
import React from "react";
import TapChart from "../assets/charts.JSON/TapChart.json";
import WrenchSize from "../assets/charts.JSON/WrechSize.json";
import DrillSize from "../assets/charts.JSON/DrillSize.json";
import * as actions from "../actions";

class ReferenceManualContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // rebind functions to 'this' within the constructor, these functions are for local use
    this.chartInitialized = props.chartInitialized.bind(this);
  }

  setRefChart = (refChart) => {
    switch (this.internalProps.referenceType) {
      case "TapAndDie":
        refChart = TapChart;
        return refChart;
      case "WrenchSize":
        refChart = WrenchSize;
        return refChart;
      case "DrillSize":
        refChart = DrillSize;
        return refChart;
      default:
        break;
    }
  };

//   useEffect(() => {
//       let chartObject = { chart }.chart;
//       setChartData(chartObject);
//     }, []);

  componentDidMount() {
    let refChart;
    this.chartInitialized(this.internalProps);
    this.setRefChart(refChart);
  }

  render(refChart) {
    // const [chartData, setChartData] = useState([]);
    let chartData = refChart.chart
    

    return (
      <>

{/* {this.internalProps.referenceType === 'TapAndDie' ? (
            <Table >
              <tbody>
                <TRow>
                  <TData1>{props.tapSize}</TData1>
                  <TData2>{props.DiamSAE}</TData2>
                  <TData1>{props.DiamMetric}</TData1>
                  <TData2>{props.tpi}</TData2>
                  <TData1>{props.threadPitch}</TData1>
                  <TData2>{props.tapDrillSize}</TData2>
                </TRow>
              </tbody>
            </Table>
          ) : (
            ""
          )} */}

        {this.internalProps.referenceType === 'TapAndDie' ? (
            {chartData.map((chart) => (
            <ReferencePage
                key={chart.tapSize}
                tapSize={chart.tapSize}
                DiamSAE={chart.diamSAE}
                DiamMetric={chart.diamMetric}
                tpi={chart.tpi}
                threadPitch={chart.threadPitch}
                tapDrillSize={chart.tapDrillSize}
            />)
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartInitialized: (props) => {
      dispatch(actions.chartInitialized(props));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceManualContainer);
