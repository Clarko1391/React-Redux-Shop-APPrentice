import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/img/shopAPPrenticeLogo.png";
import userIcon from "../assets/img/userIcon.png";
import userIconActive from "../assets/img/userIconActive.png";

// CSS
const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  color: #fcfbfc;
`;

const Logo = styled.div`
  width: 15%;
  height: 95%;
  padding-left: 20px;
`;

const Icon = styled.div`
  width: 15%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIMG = styled.div`
  background: url(${img}) center no-repeat;
  background-size: contain;
  height: 100%;
`;

const UserIcon = styled.i`
  background: url(${userIcon}) center no-repeat;
  background-size: contain;
  position: relative;
  height: 50%;
  width: 50%;
`;

const UserIconActive = styled.i`
  background: url(${userIconActive}) center no-repeat;
  background-size: contain;
  position: relative;
  height: 50%;
  width: 50%;
`;

const IconLink = styled(Link)`
  text-decoration: none;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const NavLinks = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  padding-right: 10px;
  margin: 0px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavItem = styled.li`
  text-decoration: none;
  color: ${(props) => (props.highlighted ? "#da1622" : "#fcfbfc")};
  font-weight: bold;
  font-size: 2vh;
  &:hover {
    color: #da1622;
  }
`;

function Navbar({ isLogged }) {
  // Variables
  const page = useLocation();

  return (
    <>
      <NavBarContainer>
        <Logo>
          <LogoIMG />
        </Logo>
        <NavLinks>
          <NavLink to="/MeasurementConverter">
            <NavItem highlighted={page.pathname === "/MeasurementConverter"}>
              Measurement Converter
            </NavItem>
          </NavLink>
          <NavLink to="/FractionalCalculator">
            <NavItem highlighted={page.pathname === "/FractionalCalculator"}>
              Fractional Calculator
            </NavItem>
          </NavLink>
          <NavLink to="/ReferenceManual">
            <NavItem highlighted={page.pathname === "/ReferenceManual"}>
              Reference Manual
            </NavItem>
          </NavLink>
        </NavLinks>
        <Icon>
          {isLogged ? (
            <UserIconActive>
              <IconLink to="/UserSettings" />
            </UserIconActive>
          ) : (
            <UserIcon>
              <IconLink to="/Login" />
            </UserIcon>
          )}
        </Icon>
      </NavBarContainer>
    </>
  );
}

export default Navbar;
