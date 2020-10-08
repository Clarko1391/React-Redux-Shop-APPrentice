import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../../img/left.png'
import BackButton from '../pageComponents/BackButton'
import chart from '../../charts.JSON/WrenchSize.json'
import WrenchSizeEntry from './PageComponents/WrenchSizeEntry'

// CSS
const ReferenceContainer = styled.div`
    height: 80vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`
const ReferenceContent = styled.div`
    height: 100%;
    width: 105%;
    padding-right: 5%;
    padding-top: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    overflow-y: scroll;
`
const ChartTitle = styled.h1`
    font-size: 3vh;
    color: #fcfbfc;
`
const Table = styled.table`
    background-color: rgba(78,77,78, 0.9);
    margin: 0px 20px 10px 10px;
`

function WrenchSize() {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let chartObject = ({chart}.chart);
        setChartData(chartObject);
    }, []);
    
    return (
        <>
            <ReferenceContainer >
                <ReferenceContent >
                    <ChartTitle >Wrench Size Chart</ChartTitle>
                    <Table >
                        <tbody >
                        {chartData.map(chart => (
                            <WrenchSizeEntry
                                key={chart.metric}
                                boltDiam={chart.boltDiam}
                                SAE={chart.SAE}
                                metric={chart.metric}
                                
                            />))}
                        </tbody>
                    </Table>
                </ReferenceContent>
            </ReferenceContainer>
            <BackButton />
        </>
    )
}

export default WrenchSize
