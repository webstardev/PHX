import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import Header from "../components/Header";
import Menu from "../components/Menu";
import { BigSubscribe, SmallSubscribe } from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Menu />
    <Layout>
      <Header />
      <Hero>
        <HeroText>
          <h1>Quantum Computing Sandbox</h1>
          <h5>
            An interactive platform for software engineers to learn quantum
            software languages and become fluent in the quantum computing
            mathematical paradigm
          </h5>

          <SmallSubscribe />
        </HeroText>
        <HeroIllo src="/assets/heroillustration.png" />
      </Hero>
      <Section1>
        <h4>Recent Releases</h4>
        <FlexContainer>
          <div style={{ cursor: "pointer", maxWidth: "100%" }}>
            <Link to="/tutorials/hello" as="/tutorials/hello">
              <Tilt glareEnable={true} perspective={3000} tiltReverse={true}>
                <FlexCard>
                  <h5>Hello Quantum World</h5>
                  <img src="/assets/intro.png" />
                </FlexCard>
              </Tilt>
            </Link>
          </div>

          <div style={{ cursor: "pointer", maxWidth: "100%" }}>
            <Link to="/tutorials/bloch" as="/tutorials/bloch">
                <Tilt glareEnable={true} perspective={3000} tiltReverse={true}>
                  <FlexCard>
                    <h5>Bloch Sphere VR</h5>
                    <img src="/assets/intro.png" />
                  </FlexCard>
                </Tilt>
            </Link>
          </div>
          <div
            style={{
              cursor: "pointer",
              maxWidth: "100%",
              margin: "0 2rem"
            }}
          >            
            <a
              href="https://medium.com/quantum-computing-for-the-utopian/a-simple-quantum-teleportation-exercise-with-googles-cirq-f5d93dadf307"
              target="_blank"
            >
              <Tilt glareEnable={true} tiltReverse={true}>
                <FlexCard>
                  <h5>Quantum Teleportation in Cirq</h5>
                  <img src="/assets/teleportation.png" />
                </FlexCard>
              </Tilt>
            </a>           
          </div>
        </FlexContainer>
      </Section1>
      <FinalSection>
        <BigSubscribe />
      </FinalSection>
    </Layout>
    <Footer hasAbsurd={true} />
  </>
)

export const Layout = styled.div`
  width: 1040px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.01em;
    margin: 0;

    @media all and (max-width: 930px) {
      font-size: 2.5rem;
    }
  }

  h5 {
    color: #666;
    text-align: inherit;
    font-size: 1.25rem;
    line-height: 1.5em;
    text-transform: none;
    max-width: 40ch;
    margin: 2.5rem 0;
  }

  p {
    text-align: left;
  }

  @media all and (max-width: 930px) {
    margin: 2rem 0 0;
    flex-direction: column;

    h1,
    h5 {
      text-align: center;
    }

    h5 {
      margin: 2.5rem auto;
    }
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`;

const HeroIllo = styled.img`
  max-width: 100%;
  width: 500px;

  @media all and (max-width: 930px) {
    margin-top: 5rem;
  }
`;

const Disclaimer = styled.p`
  margin: 0;
  text-align: center;
  color: #444;
`;

const Section1 = styled.section`
  margin: 8rem 0 0;
  border-top: 0.5px solid #000;
  border-bottom: 0.5px solid #000;
  padding: 1rem 1rem 4rem;

  h4 {
    margin-bottom: 2rem;
  }

  @media all and (max-width: 930px) {
    margin: 4rem 0 0;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const FlexCard = styled.figure`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
  width: 300px;
  max-width: 100%;
  position: relative;
  margin: 0;

  h5 {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1rem;
    ${"" /* min-height: 54px; */}
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  border-width: 1px;
  border-color: #eaeaea;
  border-radius: 5;
  border-style: solid;
`;
const FinalSection = styled.section`
  margin: 8rem 0;
`;

export default Home;