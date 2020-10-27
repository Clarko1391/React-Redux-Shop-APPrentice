import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/img/right.png'

// CSS
const ReferenceManualContainer = styled.div`
    min-height: 85vh;
    width: 100%;
    background: url(${img}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const RefLink = styled(Link)`
    width: 80%;
    height: 15vh;
    max-height: 120px;
    background-color: rgba(78,77,78, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
    text-decoration: none;
        &&:hover {
            background-color: rgba(218, 22, 34, 0.5);
    }
`
const ManualHeader = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 2vh;
    color: #fcfbfc;
`
const ManualDescription = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 1.5vh;
    color: #fcfbfc;
`

function ReferenceManual() {
    return (
        <ReferenceManualContainer>
            <RefLink 
                to='/ReferenceManual/TapAndDie'
            >
                <ManualHeader>
                    Tap and Die Chart
                </ManualHeader>
                <ManualDescription>
                    Standard tap and die sizes covering Metric and SAE up to 1/2"
                </ManualDescription>
            </RefLink>
            <RefLink 
                to='/ReferenceManual/WrenchSize'
            >
                <ManualHeader>
                    Wrench Sizing Chart
                </ManualHeader>
                <ManualDescription>
                    Wrench size chart covering Metric and SAE based on nut/bolt size
                </ManualDescription>
            </RefLink>
            <RefLink 
                to='/ReferenceManual/DrillSize'
            >
                <ManualHeader>
                    Drill Bit Size Chart
                </ManualHeader>
                <ManualDescription>
                    Extensive drill bit size chart covering a wide range of sizes in Metric and SAE
                </ManualDescription>
            </RefLink>
            <RefLink 
                to='/ReferenceManual/UserAdd'
            >
                <ManualHeader>
                    Add Your Own References
                </ManualHeader>
                <ManualDescription>
                    This option will be added in a future update!
                </ManualDescription>
            </RefLink>
        </ReferenceManualContainer>
    )
}

export default ReferenceManual
