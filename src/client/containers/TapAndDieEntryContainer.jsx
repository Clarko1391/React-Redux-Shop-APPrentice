import React, { useState, useEffect } from 'react'
import chart from '../assets/charts.JSON/TapChart.json'
import TapAndDieEntry from '../components/TapAndDieEntry'

// CSS

function TapAndDieEntryContainer() {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let chartObject = ({chart}.chart);
        setChartData(chartObject);
    }, []);
    
    return (
        <>
            {chartData.map(chart => (
                <TapAndDieEntry
                    key={chart.tapSize}
                    tapSize={chart.tapSize}
                    DiamSAE={chart.diamSAE}
                    DiamMetric={chart.diamMetric}
                    tpi={chart.tpi}
                    threadPitch={chart.threadPitch}
                    tapDrillSize={chart.tapDrillSize}
                />))}
        </>
        
    )
}

export default TapAndDieEntryContainer;