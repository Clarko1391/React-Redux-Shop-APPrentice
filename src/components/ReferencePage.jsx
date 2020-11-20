import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import img from '../assets/img/left.png';
import ButtonContainer from './ButtonContainer';

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
`;
const TRow = styled.tr`
  width: 100%;
`;
const TData1 = styled.td`
  padding: 5px;
  background-color: #c4d0dc;
  color: #383838;
  font-size: 1.5vh;
  &&:hover {
    background-color: #da1622;
    color: #fcfbfc;
  }
`;
const TData2 = styled.td`
  padding: 5px;
  background-color: #383838;
  color: #fcfbfc;
  font-size: 1.5vh;
  &&:hover {
    background-color: #da1622;
    color: #fcfbfc;
  }
`;

const TData3 = styled.td`
    background-color: #000;
`;

// PropTypes
const propTypes = {
    referenceId: PropTypes.string,
    referenceType: PropTypes.string,
    chartTitle: PropTypes.string,
  };

function ReferencePage(
  props
) {
  return (
    <>
      <ReferenceContainer>
        <ReferenceContent>
          <ChartTitle >{props.chartTitle}</ChartTitle>
          {this.internalProps.referenceType === 'TapAndDie' ? (
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
          )}
          {this.internalProps.referenceType === 'WrenchSize' ? (
            <Table >
              <tbody>
                <TRow>
                  <TData1>{props.boltDiam}</TData1>
                  <TData2>{props.SAE}</TData2>
                  <TData1>{props.metric}</TData1>
                </TRow>
              </tbody>
            </Table>
          ) : (
            ""
          )}
          {this.internalProps.referenceType === 'DrillSize' ? (
            <Table >
              <tbody>
                <TRow>
                  <TData1>{props.size0}</TData1>
                  <TData2>{props.decEquiv0}</TData2>
                  <TData3/>
                  <TData1>{props.size1}</TData1>
                  <TData2>{props.decEquiv1}</TData2>
                  <TData3/>
                  <TData1>{props.size2}</TData1>
                  <TData2>{props.decEquiv2}</TData2>
                  <TData3/>
                  <TData1>{props.size3}</TData1>
                  <TData2>{props.decEquiv3}</TData2>
                </TRow>
              </tbody>
            </Table>
          ) : (
            ""
          )}
        </ReferenceContent>
      </ReferenceContainer>
      <ButtonContainer  
          buttonId="rm-back-button"
          buttonStyle="backButton"
          isNavButton={true}
          navigateTo="/ReferenceManual"
          buttonTitlePrimary="Back to "
          buttonTitleSecondary="Reference Manuals"/>
    </>
  )
}

ReferencePage.propTypes = propTypes;

export default ReferencePage;
