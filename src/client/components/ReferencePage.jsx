import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import img from "../assets/img/left.png";
import TapAndDieEntryContainer from '../containers/TapAndDieEntryContainer';
import DrillSizeEntryContainer from '../containers/DrillSizeEntryContainer';
import WrenchSizeEntryContainer from '../containers/WrenchSizeEntryContainer';
import ButtonContainer from "../containers/ButtonContainer";

// CSS
const ReferenceContainer = styled.div`
  height: 80vh;
  width: 100%;
  background: url(${img}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
`;
const ReferenceContent = styled.div`
  height: 100%;
  width: 105%;
  padding-right: 5%;
  padding-top: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow-y: scroll;
`;
const ChartTitle = styled.h1`
  font-size: 3vh;
  color: #fcfbfc;
`;
const Table = styled.table`
  background-color: rgba(78, 77, 78, 0.9);
  margin: 0px 20px 10px 10px;
`;

// PropTypes
const propTypes = {
  referenceId: PropTypes.string,
  referenceType: PropTypes.string,
  chartTitle: PropTypes.string,
};

function ReferencePage({chartTitle, referenceType}) {
  return (
    <>
      <ReferenceContainer>
        <ReferenceContent>
          <ChartTitle>{chartTitle}</ChartTitle>
          <Table>
            <tbody>
              {referenceType === "TapAndDie" ? (
                <TapAndDieEntryContainer />
              ) : (
                <tr />
              )}
              {referenceType === "WrenchSize" ? (
                <WrenchSizeEntryContainer />
              ) : (
                <tr />
              )}
              {referenceType === "DrillSize" ? (
                <DrillSizeEntryContainer />
              ) : (
                <tr />
              )}
            </tbody>
          </Table>
        </ReferenceContent>
      </ReferenceContainer>
      <ButtonContainer
        buttonId="rm-back-button"
        buttonStyle="backButton"
        isNavButton={true}
        navigateTo="/ReferenceManual"
        buttonTitlePrimary="Back to "
        buttonTitleSecondary="Reference Manuals"
      />
    </>
  );
}

ReferencePage.propTypes = propTypes;

export default ReferencePage;
