import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
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

export default () => (
  <>
    <Menu />
    <Layout>
      <Header />
      <Content>
        <div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h1 id="Hello-Quantum-World">
                  Hello Quantum World
                  <a className="anchor-link" href="#Hello-Quantum-World"></a>
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
                    href="https://github.com/bt3gl"
                    alt="author Mia von Steinkirch"
                  >
                    Mia von Steinkirch
                  </a>
                </p>
                <p>
                  QC Sandbox is a platform to help software engineers and quantum computing enthusiasts learn quantum
                  software languages, through interactive coding tutorials,
                  curated articles, and quantum games.
                </p>
                <p>
                  In this very simple <em>hello world</em> example, you will learn how to create a
                  qubit and a circuit in one of the open-source quantum software
                  languages available:{" "}
                  <a href="https://github.com/quantumlib/Cirq">Google's Cirq</a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>Create a qubit:</p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt"></div>
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="kn">import</span>{" "}
                      <span className="nn">cirq</span>
                      {"\n"}
                      <span className="n">msg</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">LineQubit</span>
                      <span className="p">(</span>
                      <span className="mi">0</span>
                      <span className="p">)</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>Create a circuit and add your qubit:</p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt"></div>
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="n">circuit</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">Circuit</span>
                      <span className="p">()</span>
                      {"\n"}
                      <span className="n">circuit</span>
                      <span className="o">.</span>
                      <span className="n">append</span>
                      <span className="p">(</span>
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">X</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">))</span>
                      {"\n"}
                      <span className="nb">print</span>
                      <span className="p">(</span>
                      <span className="n">circuit</span>
                      <span className="p">)</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="output_wrapper">
              <div className="output">
                <div className="output_area">
                  <div className="prompt" />
                  <div className="output_subarea output_stream output_stdout output_text">
                    <pre>0: ───X───{"\n"}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>Run the simulator and measure the qubit:</p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt"></div>
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="kn">import</span>{" "}
                      <span className="nn">numpy</span>{" "}
                      <span className="k">as</span>{" "}
                      <span className="nn">np</span>
                      {"\n"}
                      <span className="n">sim</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">Simulator</span>
                      <span className="p">()</span>
                      {"\n"}
                      <span className="n">original_message</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">sim</span>
                      <span className="o">.</span>
                      <span className="n">simulate</span>
                      <span className="p">(</span>
                      <span className="n">circuit</span>
                      <span className="p">)</span>
                      {"\n"}
                      <span className="n">expected</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">bloch_vector_from_state_vector</span>
                      <span className="p">(</span>
                      <span className="n">original_message</span>
                      <span className="o">.</span>
                      <span className="n">final_state</span>
                      <span className="p">,</span> <span className="mi">0</span>
                      <span className="p">)</span>
                      {"\n"}
                      <span className="nb">print</span>
                      <span className="p">(</span>
                      <span className="s2">"</span>
                      <span className="se">\n</span>
                      <span className="s2">
                        Bloch Sphere of Message After X Gate:"
                      </span>
                      <span className="p">)</span>
                      {"\n"}
                      <span className="nb">print</span>
                      <span className="p">(</span>
                      <span className="s2">"x: "</span>
                      <span className="p">,</span> <span className="n">np</span>
                      <span className="o">.</span>
                      <span className="n">around</span>
                      <span className="p">(</span>
                      <span className="n">expected</span>
                      <span className="p">[</span>
                      <span className="mi">0</span>
                      <span className="p">],</span>{" "}
                      <span className="mi">4</span>
                      <span className="p">),</span>{" "}
                      <span className="s2">"y: "</span>
                      <span className="p">,</span> <span className="n">np</span>
                      <span className="o">.</span>
                      <span className="n">around</span>
                      <span className="p">(</span>
                      <span className="n">expected</span>
                      <span className="p">[</span>
                      <span className="mi">1</span>
                      <span className="p">],</span>{" "}
                      <span className="mi">4</span>
                      <span className="p">),</span>
                      {"\n"}
                      {"          "}
                      <span className="s2">"z: "</span>
                      <span className="p">,</span> <span className="n">np</span>
                      <span className="o">.</span>
                      <span className="n">around</span>
                      <span className="p">(</span>
                      <span className="n">expected</span>
                      <span className="p">[</span>
                      <span className="mi">2</span>
                      <span className="p">],</span>{" "}
                      <span className="mi">4</span>
                      <span className="p">))</span>
                      {"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="output_wrapper">
              <div className="output">
                <div className="output_area">
                  <div className="prompt" />
                  <div className="output_subarea output_stream output_stdout output_text">
                    <pre>
                      Bloch Sphere of Message After X Gate:{"\n"}x:{"  "}0.0 y:
                      {"  "}0.0 z:{"  "}-1.0{"\n"}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h3 id="Congratulations,-you-measured-your-first-qubit!">
                  Congratulations, you measured your first qubit! 
                  </h3>
                  
                  Check out the source code (Jupyter notebook) <a href="https://github.com/wearecuriee/qcsandbox_tutorials/blob/master/hello_quantum_world.ipynb">here</a>.
                  <a
                    className="anchor-link"
                    href="#Congratulations,-you-measured-your-first-qubit!"
                  ></a>
               
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
    <Footer />
  </>
);