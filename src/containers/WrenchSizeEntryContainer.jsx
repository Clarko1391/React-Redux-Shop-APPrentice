import React, { useEffect, useState } from "react";
import chart from "../assets/charts.JSON/WrenchSize.json";
import WrenchSizeEntry from "../components/WrenchSizeEntry";

function WrenchSizeEntryContainer() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let chartObject = { chart }.chart;
    setChartData(chartObject);
  }, []);

  return (
    <>
      {chartData.map((chart) => (
        <WrenchSizeEntry
          key={chart.metric}
          boltDiam={chart.boltDiam}
          SAE={chart.SAE}
          metric={chart.metric}
        />
      ))}
    </>
  );
}

export default WrenchSizeEntryContainer;
