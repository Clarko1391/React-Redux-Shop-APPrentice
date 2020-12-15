import React from "react";
// import { PropTypes } from "prop-types";
import styled from "styled-components";
import StyledButtonContainer from "../containers/StyledButtonContainer";
import img from "../assets/img/right.png";

// CSS
const HeroContainer = styled.div`
  min-height: 85vh;
  width: 100%;
  background: url(${img}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UIContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

// // PropTypes
// const propTypes = {
//   isLogged: PropTypes.bool,
//   userName: PropTypes.string,
// };

// Functional Component
function ReferenceManual() {
  return (
    <HeroContainer>
      <UIContainer>
        <StyledButtonContainer
          buttonId="tap-and-die-button"
          isNavButton={true}
          navigateTo="/ReferenceManual/TapAndDie"
          buttonTitlePrimary="Tap and Die Chart"
          buttonTitleSecondary= "Standard tap and die sizes covering Metric and SAE up to 1/2"
        />
      </UIContainer>
      <UIContainer>
        <StyledButtonContainer
          buttonId="wrench-size-button"
          isNavButton={true}
          navigateTo="/ReferenceManual/WrenchSize"
          buttonTitlePrimary="Wrench Size Chart"
          buttonTitleSecondary= "Wrench size chart covering Metric and SAE based on nut/bolt size"
        />
      </UIContainer>
      <UIContainer>
        <StyledButtonContainer
          buttonId="drill-size-button"
          isNavButton={true}
          navigateTo="/ReferenceManual/DrillSize"
          buttonTitlePrimary="Drill Bit Size"
          buttonTitleSecondary= "Extensive drill bit size chart covering a wide range of sizes in Metric and SAE"
        />
      </UIContainer>
      <UIContainer>
        <StyledButtonContainer
          buttonId="user-add-button"
          isNavButton={true}
          navigateTo="/ReferenceManual/UserAdd"
          buttonTitlePrimary="Add your own references"
          buttonTitleSecondary= "This option will be added in a future update!"
        />
      </UIContainer>
    </HeroContainer>
  );
}

// ReferenceManual.propTypes = propTypes;

export default ReferenceManual;