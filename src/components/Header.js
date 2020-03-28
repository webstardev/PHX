import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => (
  <Wrapper>
    <HeaderGroup>
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.svg" alt="" aria-label="icon" width="40" />
        </Link>
      </div>
    </HeaderGroup>
    <HeaderGroupLinks>      
      <NewLink to="/tutorials">
        Tutorials
        <NewLinkText bg="#93CBE6">New</NewLinkText>
      </NewLink>
      <NewLink to="/sandbox">
        Sandbox
        <NewLinkText bg="#D0A5D3">Soon</NewLinkText>
      </NewLink>
      <a href="https://curiee.com/about">About</a>

    </HeaderGroupLinks>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1rem;
  margin: auto;
  transition: all 0.3s ease 0s;
`;

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;

  div.logo > a {
    padding: 0;
  }
`;

const HeaderGroupLinks = styled(HeaderGroup)`
  @media all and (max-width: 930px) {
    display: none;
  }
`;

export const NewLink = styled(Link)`
  ursor: pointer;
  user-select: none;
  transition: background 120ms ease-in 0s;
  width: auto;
  padding: 4px 10px;
  border-radius: 3px;
  flex-shrink: 0;
  font-size: 15px;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${props => props.color};

  @media all and (max-width: 930px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const NewLinkText = styled.div`
  display: inline-block;
  align-self: center;
  margin-bottom: 8px;
  padding: 1px 3px;
  background: ${props => props.bg || "#3291ff"};
  color: white;
  border-radius: 3px;
  margin-left: 6px;
  font-size: 9px;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export default Header;
