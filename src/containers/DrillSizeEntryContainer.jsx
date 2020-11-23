import React, { useState, useEffect } from "react";
import chart from "../assets/charts.JSON/DrillSize.json";
import DrillSizeEntry from "../components/DrillSizeEntry";

function DrillSizeEntryContainer() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let chartObject = { chart }.chart;
    setChartData(chartObject);
  }, []);

  return (
    <>
      {chartData.map((chart) => (
        <DrillSizeEntry
          key={chart.decEquiv0}
          size0={chart.size0}
          decEquiv0={chart.decEquiv0}
          size1={chart.size1}
          decEquiv1={chart.decEquiv1}
          size2={chart.size2}
          decEquiv2={chart.decEquiv2}
          size3={chart.size3}
          decEquiv3={chart.decEquiv3}
        />
      ))}
    </>
  );
}

export default DrillSizeEntryContainer;
