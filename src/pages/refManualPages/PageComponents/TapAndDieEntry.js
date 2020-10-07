import React from 'react'
import styled from 'styled-components'

// CSS
const TRow = styled.tr`
    width: 100%;
`
const TData1 = styled.td`
    padding: 5px;
    background-color: #c4d0dc;
    color: #383838;
    font-size: 1.5vh;
    &&:hover {
        background-color: #da1622;
        color: #fcfbfc;
    }
`
const TData2 = styled.td`
    padding: 5px;
    background-color: #383838;
    color: #fcfbfc;
    font-size: 1.5vh;
    &&:hover {
        background-color: #da1622;
        color: #fcfbfc;
    }
`

function TapAndDieEntry(props) {
    return (
        <TRow>
            <TData1>{props.tapSize}</TData1>
            <TData2>{props.DiamSAE}</TData2>
            <TData1>{props.DiamMetric}</TData1>
            <TData2>{props.tpi}</TData2>
            <TData1>{props.threadPitch}</TData1>
            <TData2>{props.tapDrillSize}</TData2>
        </TRow>
    )
}

export default TapAndDieEntry
