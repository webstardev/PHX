
import 'aframe'
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Layout = styled.div`
  width: 1040px;
  max-width: 100%;
  min-height: 75vh;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.div`
  padding: 0 1rem;
  margin: 3rem 0;

  a {
    padding: 0;
  }
`;

const codeStyle = {
  backgroundColor: "#F0F0F0",
  borderRadius: "3px",
  fontFamily: "courier, monospace",
  padding: "0 3px"
};

const myButton = {
  backgroundColor: "#f81ce6",
  borderRadius: "16px",
  border: "1px solid #c223b5",
  display: "inline-block",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Verdana",
  fontSize: "17px",
  padding: "16px 31px",
  textDecoration: "none",
  textShadow: "0px 0px 0px #822a7b",

  ":hover": {
    background: "#d11ec2"
  },
  ":active": {
    position: "relative",
    top: "1px"
  }
};

const variableStyle = {
  color: "blue",
  backgroundColor: "#F4F4F4",
  borderRadius: "3px",
  fontFamily: "courier, monospace",
  padding: "0 3px"
};

var direction = 1; // -1 for left, 1 for right
var speed = 0.1;
var updateRate = 0;

function X() {
  /*
  var def = document.querySelector("#arrow");

  var defRotation = def.getAttribute("rotation");
  var x = defRotation.x;
  var newX = x + direction * speed;

  defRotation.x = newX;
  def.setAttribute("rotation", defRotation);

  /*
      var xval = {

    x: document.getElementById("arrowcyl").getAttribute("position")["x"],
    y: document.getElementById("arrowcyl").getAttribute("position")["y"],
    z: document.getElementById("arrowcyl").getAttribute("position")["z"]
  };

  if (JSON.stringify(xval) === JSON.stringify({ x: 0, y: 1.75, z: -1 })) {
    document.getElementById("arrowcyl").setAttribute("position", "0 1.25 -1");

    document.getElementById("arrowcone").setAttribute("position", "0 1 -1");
    document.getElementById("arrowcone").setAttribute("rotation", "180 0 0");
  } else if (
    JSON.stringify(xval) === JSON.stringify({ x: 0, y: 1.25, z: -1 })
  ) {
    document.getElementById("arrowcyl").setAttribute("position", "0 1.75 -1");

    document.getElementById("arrowcone").setAttribute("position", "0 2 -1");
    document.getElementById("arrowcone").setAttribute("rotation", "0 0 0");
  } else {
    return;
  }
  */
}

//setInterval(X, 1000 / updateRate);

function Y() {
  var xval = {
    x: document.getElementById("arrowcyl").getAttribute("position")["x"],
    y: document.getElementById("arrowcyl").getAttribute("position")["y"],
    z: document.getElementById("arrowcyl").getAttribute("position")["z"]
  };

  if (JSON.stringify(xval) === JSON.stringify({ x: 0, y: 1.75, z: -1 })) {
    document.getElementById("arrowcyl").setAttribute("position", "0 1.25 -1");

    document.getElementById("arrowcone").setAttribute("position", "0 1 -1");
    document.getElementById("arrowcone").setAttribute("rotation", "180 0 0");
  } else if (
    JSON.stringify(xval) === JSON.stringify({ x: 0, y: 1.25, z: -1 })
  ) {
    document.getElementById("arrowcyl").setAttribute("position", "0 1.75 -1");

    document.getElementById("arrowcone").setAttribute("position", "0 2 -1");
    document.getElementById("arrowcone").setAttribute("rotation", "0 0 0");
  } else {
    return;
  }
}

function Z() {
  document.getElementById("arrowcyl").setAttribute("position", "0 1.25 -1");
  document.getElementById("arrowcone").setAttribute("position", "0 1 -1");
  document.getElementById("arrowcone").setAttribute("rotation", "0 0 180");
}

function Hadamard() {
  document.getElementById("arrowcyl").setAttribute("position", "0.25 1.5 -1");
  document.getElementById("arrowcyl").setAttribute("rotation", "0 0 90");

  document.getElementById("arrowcone").setAttribute("position", "0.5 1.5 -1");
  document.getElementById("arrowcone").setAttribute("rotation", "0 0 -90");
}

// Figure out why you need to reload the page on chrome to size it correctly
// Add buttons for operating on sphere

export default () => (
  <>
    <Layout>
      <Header />
      <Content>
        <div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt" />
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h1 id="Bloch-Sphere-VR">
                  Bloch Sphere VR
                  <a className="anchor-link" href="#Bloch" />
                </h1>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    lineHeight: "1.6",
                    letterSpacing: "1px",
                    marginBottom: "3rem"
                  }}
                >
                  Written by{" "}
                  <a
                    style={{ fontSize: "16px" }}
                    href="https://twitter.com/quantum_traps"
                    alt="author Victor Marino"
                  >
                    Victor Marino
                  </a>
                </p>
                <p>
                  In classical computing, we have <b>bits</b> that take on a
                  value of either 0 or 1, while in quantum computing, we have{" "}
                  <b>qubits</b> with values in a superposition 0 and 1. To
                  represent this, we write our quantum state in the following
                  way:<code style={codeStyle}>|ψ> = α|0> + β|1></code>
                </p>
                <div>
                  <center>
                    <img
                      crossOrigin="https://i.imgur.com/8fSacOa.png"
                      src="https://i.imgur.com/8fSacOa.png"
                      alt="bloch"
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>Bloch sphere VR:</p>
        <center>
          <button style={myButton} onClick={X}>
            Pauli gate X
          </button>{" "}
          <button style={myButton} onClick={Y}>
            Pauli gate Y
          </button>{" "}
          <button style={myButton} onClick={Z}>
            Pauli gate Z
          </button>
          <br />
          <br />
          <button style={myButton} onClick={Hadamard}>
            Hadamard
          </button>
        </center>
        <p />
        <div style={{ height: "500px", width: "500px", margin: '0 auto' }}>
          <a-scene background="color: #f8f8f8" embedded>
            <a-assets>
              <img
                id="sky"
                crossOrigin="https://cdn.eso.org/images/screen/eso0932a.jpg"
                src="https://cdn.eso.org/images/screen/eso0932a.jpg"
                alt="sky stars"
              />
            </a-assets>
            <a-sky src="#sky" />
            <a-camera position="0 0 1" />
            <a-sphere
              position="0 0 0"
              radius="0.5"
              color="#F8F8F8"
              material="envMap: #sky; metalness:0.1; roughness: 0"
              opacity="0.2"
            />
            <a-torus
              material="side: double"
              id="yz"
              color="black"
              radius="0.51"
              radius-tubular="0.001"
              opacity="0.5"
              position="0 0 0"
            />
            <a-torus
              material="side: double"
              id=""
              color="black"
              radius="0.51"
              radius-tubular="0.001"
              opacity="0.5"
              position="0 0 0"
              rotation="90 90 0"
            />
            <a-torus
              material="side: double"
              id=""
              color="black"
              radius="0.51"
              radius-tubular="0.001"
              opacity="0.5"
              position="0 0 0"
              rotation="1 90 90"
            />
            <a-entity id="arrow">
              <a-cylinder
                material="envMap: #sky; metalness:0.1; roughness: 1"
                id="arrowcyl"
                color="crimson"
                position="0 0.0 0"
                height="1"
                radius="0.03"
              />
              <a-cone
                material="envMap: #sky; metalness:0.1; roughness: 0"
                id="arrowcone"
                color="crimson"
                position="0 0.5 0"
                height="0.1"
                radius-bottom="0.05"
                radius-top="0.005"
              />
            </a-entity>
            <a-text
              value="[1/√2, i/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="0.55 0 0"
            />
            <a-text
              value="[1/√2, -i/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="-1.05 0 0"
            />
            <a-text
              value="[1/√2, 1/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="-0.2 0 0.6"
            />
            <a-text
              value="[1/√2, -1/√2]"
              font="../../assets/custom-msdf.json"
              font-image="../../assets/custom-msdf.png"
              negate="false"
              width="2"
              position="-0.2 0 -0.6"
            />
            <a-text value="[1, 0]" width="2" position="-0.1 0.6 0" />
            <a-text value="[0, 1]" width="2" position="-0.1 -0.6 0" />
            <a-cylinder
              material="envMap: #sky; metalness:0.1; roughness: 0"
              id="xcyl"
              color="black"
              position="0 0 0"
              height="1.1"
              radius="0.003"
              rotation="0 0 90"
            />
            <a-cylinder
              material="envMap: #sky; metalness:0.1; roughness: 0"
              id="ycyl"
              color="black"
              position="0 0 0"
              height="1.1"
              radius="0.003"
              rotation="90 0 0"
            />
            <a-cylinder
              material="envMap: #sky; metalness:0.1; roughness: 0"
              id="zcyl"
              color="black"
              position="0 0 0"
              height="1.1"
              radius="0.003"
            />
          </a-scene>
        </div>
      </Content>
    </Layout>
    <Footer />
  </>
);
