import React from "react";
import styled from "styled-components";
import { bubble as Menu } from "react-burger-menu";
import { NewLink, NewLinkText } from "./Header";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "2rem",
    height: "2rem",
    right: "1.5rem",
    top: "2.3rem"
  },
  bmBurgerBars: {
    background: "#000"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    right: "20px"
  },
  bmCross: {
    background: "#bdc3c7",
    width: "10px",
    height: "30px"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#000",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#000"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const A = styled.a`
  color: white;
  @media all and (max-width: 930px) {
    font-size: 30px;
  }
`;

export default () => (
  <Menu right styles={styles}>

    <NewLink to="/tutorials" color="#fff">
      Tutorials
      <NewLinkText>New</NewLinkText>
    </NewLink>

    <NewLink  to="/sandbox" color="#fff">
      Sandbox
      <NewLinkText bg="#F49B0B">Soon</NewLinkText>
    </NewLink>

    <A href="https://curiee.com/about" style={{ color: "white" }}>About</A>
  </Menu>
);
