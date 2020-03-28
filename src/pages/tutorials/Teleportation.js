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
                <h1 id="Quantum-Teleportation">
                  Quantum Teleportation
                  <a className="anchor-link" href="#Quantum-Teleportation" />
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
                In 1993, a group of physicists discovered a type of quantum teleportation that 
  would enable a quantum state to be instantly transported any distance without directly sending the actual qubit (
                  
  <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.70.1895">
                    Teleporting an unknown quantum state via dual classical and
                    Einstein-Podolsky-Rosen channels, Phys. Rev. Lett. 70, 1895
                  </a>
                  ).
                </p>
                <p>
                  Quantum Teleportation is a process by which a quantum state of
                  a particle (for example, a photon or an electron) can be
                  transmitted by sending only two classical bits of information.
                </p>
                <p>
                  In quantum mechanics, the simplest quantum system is the
                  single <strong>qubit</strong>:
                </p>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mo fence="false" stretchy="false">
                    |
                  </mo>
                  <mi>ψ{/* ψ */}</mi>
                  <mo fence="false" stretchy="false">
                    ⟩{/* ⟩ */}
                  </mo>
                  <mo>=</mo>
                  <mi>α{/* α */}</mi>
                  <mo fence="false" stretchy="false">
                    |
                  </mo>
                  <mn>0</mn>
                  <mo fence="false" stretchy="false">
                    ⟩{/* ⟩ */}
                  </mo>
                  <mo>+</mo>
                  <mi>β{/* β */}</mi>
                  <mo fence="false" stretchy="false">
                    |
                  </mo>
                  <mn>1</mn>
                  <mo fence="false" stretchy="false">
                    ⟩{/* ⟩ */}
                  </mo>
                </math>
                <p>
                  The information in this qubit is encoded in the coefficients
                  $\alpha$ and $\beta$.
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>
                  Let's call this quantum state the message (represented by the
                  variable <code>msg</code>), and represent this in the circuit we are drawing with the index <code>0</code>.
                </p>
                <p>
                  The teleportation is accomplished by pre-sharing an entangled
                  state between the sender, say <strong>Alice</strong>, and the
                  receiver, say <strong>Bob</strong>. This entangled state
                  allows the receiver to possess a qubit with the same state as
                  the one held by the sender.
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>
                  <em>
                    Note: In this tutorial, we are using{" "}
                    <a href="https://github.com/quantumlib/Cirq">
                      Google Cirq
                    </a>{" "}
                    as the source code. Nevertheless, <strong>qcsandbox</strong>{" "}
                    is a language-agnostic platform, and we will be adding
                    support for{" "}
                    <a href="https://github.com/microsoft/Quantum">
                      IBM's Qiskit
                    </a>
                    ,{" "}
                    <a href="https://github.com/rigetti/pyquil">
                      Rigetti's pyQuil
                    </a>
                    ,{" "}
                    <a href="https://github.com/microsoft/Quantum">
                      Microsoft's QDK
                    </a>
                    , and{" "}
                    <a href="https://github.com/ProjectQ-Framework/ProjectQ">
                      ETH Zurich's ProjectQ
                    </a>{" "}
                    soon.
                  </em>
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h3 id="Creating-Alice's-Message,-which-will-be-Teleported">
                  Creating Alice's Message, which will be Teleported to Bob
                  <a
                    className="anchor-link"
                    href="#Creating-Alice's-Message,-which-will-be-Teleported"
                  />
                </h3>
                <p>First, we create an object for a qubit in Cirq:</p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
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
                      <span className="nb">print</span>
                      <span className="p">(</span>
                      <span className="s1">'message is </span>
                      <span className="si">
                        {"{"}0{"}"}
                      </span>
                      <span className="s1"> of type </span>
                      <span className="si">
                        {"{"}1{"}"}
                      </span>
                      <span className="s1">'</span>
                      <span className="o">.</span>
                      <span className="n">format</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">,</span>{" "}
                      <span className="nb">type</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">)))</span>
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
                      message is 0 of type &lt;class
                      'cirq.devices.line_qubit.LineQubit'&gt;{"\n"}
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
                <p>
                  Let's fill this object with a random qubit, by applying a{" "}
                  <code>X</code> gate and <code>Y</code> gate to it, and
                  multiplying by a random float number:
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="kn">import</span>{" "}
                      <span className="nn">random</span>
                      {"\n"}
                      <span className="n">ranX</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">random</span>
                      <span className="o">.</span>
                      <span className="n">random</span>
                      <span className="p">()</span>
                      {"\n"}
                      <span className="n">ranY</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">random</span>
                      <span className="o">.</span>
                      <span className="n">random</span>
                      <span className="p">()</span>
                      {"\n"}
                      <span className="n">ranq</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">X</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">)</span>
                      <span className="o">**</span>
                      <span className="n">ranX</span>
                      <span className="p">,</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">Y</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">)</span>
                      <span className="o">**</span>
                      <span className="n">ranY</span>
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
                <p>
                  Let's start a circuit and add this first qubit (the message)
                  to it:
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
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
                      <span className="n">ranq</span>
                      <span className="p">)</span>
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
                    <pre>0: ───X^0.396───Y^(8/11)───{"\n"}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>
                  The variable below <code>original_message</code> holds Alice's
                  message, which will be compared to Bob's teleported message in
                  the end:
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
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
                      x:{"  "}0.2422 y:{"  "}-0.9475 z:{"  "}-0.2089{"\n"}
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
                <h3 id="Creating-the-Entangled-State-that-will-Teleport-Alice's-Message">
                  Creating the Entangled State that will Teleport Alice's
                  Message
                  <a
                    className="anchor-link"
                    href="#Creating-the-Entangled-State-that-will-Teleport-Alice's-Message"
                  />
                </h3>
                <p>
                  To teleport Alice's message, we use a special quantum state,
                  called <strong>Bell Quantum State</strong>.
                </p>
                <p>
                  A Quantum Bell State is composed of two <strong>entangled</strong>{" "}
                  qubits, which are pre-shared between Alice and Bob.
                </p>
                <p>
                  Remember that the first number in |00&gt; or |11&gt; is a
                  state of the first qubit (Alice's), and the second number, the
                  state of the second qubit (Bob's).
                </p>
                <p>We can build this well-defined state by:</p>
                <ol>
                  <li>
                    Creating two random qubits, <code>1</code> and <code>2</code>.
                  </li>
                  <li>
                    Applying a <strong>CNOT</strong> gate to <code>1</code> and{" "}
                    <code>2</code>.
                  </li>
                  <li>
                   Applying a <strong>Hadamard gate</strong> to{" "}
                    <code>1</code>.
                  </li>
                </ol>
                <p>
                  Then, qubit <code>1</code> is given to Alice, and qubit{" "}
                  <code>2</code> is given to Bob.
                </p>
                <p>
                  In the end, this qubit that Bob is holding, <code>1</code>,
                  will be the <em>medium</em> where Alice's message will be
                  teleported; like a white sheet of paper waiting to receive ink
                  from a printer.
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="n">alice</span>
                      <span className="p">,</span>{" "}
                      <span className="n">bob</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">LineQubit</span>
                      <span className="o">.</span>
                      <span className="n">range</span>
                      <span className="p">(</span>
                      <span className="mi">1</span>
                      <span className="p">,</span> <span className="mi">3</span>
                      <span className="p">)</span>
                      {"\n"}
                      <span className="n">circuit</span>
                      <span className="o">.</span>
                      <span className="n">append</span>
                      <span className="p">([</span>
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">H</span>
                      <span className="p">(</span>
                      <span className="n">alice</span>
                      <span className="p">),</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">CNOT</span>
                      <span className="p">(</span>
                      <span className="n">alice</span>
                      <span className="p">,</span>{" "}
                      <span className="n">bob</span>
                      <span className="p">)])</span>
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
                    <pre>
                      0: ───X^0.396───Y^(8/11)───{"\n"}
                      {"\n"}1: ───H─────────@──────────{"\n"}
                      {"                "}│{"\n"}2: ─────────────X──────────
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
                <h3 id="Entangling-Alice's-message">
                  Entangling Alice's message
                  <a
                    className="anchor-link"
                    href="#Entangling-Alice's-message"
                  />
                </h3>
                <p>
                  Now, Alice processes her message (qubit <code>0</code>) with
                  her Bell qubit (<code>1</code>). This will entangle her
                  message with her Bell qubit, consequently entangling it to Bob's
                  qubit.
                </p>
                <p>
                  Note that Bob is just sitting there with his Bell qubit,
                  waiting for the magic to happen (line <code>2</code> in the
                  circuit).
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="n">circuit</span>
                      <span className="o">.</span>
                      <span className="n">append</span>
                      <span className="p">([</span>
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">CNOT</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">,</span>{" "}
                      <span className="n">alice</span>
                      <span className="p">),</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">H</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">)])</span>
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
                    <pre>
                      0: ───X^0.396───Y^(8/11)───@───H───{"\n"}
                      {"                           "}│{"\n"}1:
                      ───H─────────@──────────X───────{"\n"}
                      {"                "}│{"\n"}2:
                      ─────────────X──────────────────
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
                <h2 id="Alice's-reads-her-processed-Message">
                  Alice reads her processed Message
                  <a
                    className="anchor-link"
                    href="#Alice's-reads-her-processed-Message"
                  />
                </h2>
                <p>
                  Alice now measures her processed message. The measurement is called{" "}
                  <strong>Bell measurement</strong>:
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="n">circuit</span>
                      <span className="o">.</span>
                      <span className="n">append</span>
                      <span className="p">(</span>
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">measure</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">,</span>{" "}
                      <span className="n">alice</span>
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
                    <pre>
                      0: ───X^0.396───Y^(8/11)───@───H───M───{"\n"}
                      {"                           "}│{"       "}│{"\n"}1:
                      ───H─────────@──────────X───────M───{"\n"}
                      {"                "}│{"\n"}2:
                      ─────────────X──────────────────────{"\n"}
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
                <p>
                  Alice takes note of the classical outcomes of her measurement,
                  in the base <code>z</code> (which we call <strong>bit</strong>{" "}
                  <code>0</code>) and in the base <code>x</code> (let's call{" "}
                  <strong>bit</strong> <code>1</code>).
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>
                  Note that at the moment she makes these two measurements, her
                  (entangled) message is teleported to Bob's qubit. In quantum
                  mechanics, when you observe a state, you collapse the state to
                  the value that was measured.
                </p>
                <p>
                  That's the quantum effect! Bob's entangled qubit (line{" "}
                  <code>2</code> in the circuit) becomes identical to whatever
                  Alice reads (measures) in her processed message (the end of
                  line <code>0</code> and <code>1</code> in the circuit).
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h2 id="Bob-measures-his-qubit-and-confirm-that-the-state-was-teleported">
                  Bob measures his qubit and confirms that the state was
                  teleported
                  <a
                    className="anchor-link"
                    href="#Bob-measures-his-qubit-and-confirm-that-the-state-was-teleported"
                  />
                </h2>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <p>
                  Bob is ready to measure the teleported state. In order to read the state,
                he only needs to know the two (classical) bits of
                  information that Alice wrote down from her measurement (bits{" "}
                  <code>0</code> and <code>1</code>). He can get this
                  information by any classical channel (like a text message).
                </p>
                <p>
                  Bob can now measure his qubit, which prints (or, collapse to)
                  Alice's original random message (in the beginning of line{" "}
                  <code>0</code> in the circuit):
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing code_cell rendered">
            <div className="input">
              <div className="prompt input_prompt" />
              <div className="inner_cell">
                <div className="input_area">
                  <div className=" highlight hl-ipython3">
                    <pre>
                      <span />
                      <span className="n">circuit</span>
                      <span className="o">.</span>
                      <span className="n">append</span>
                      <span className="p">([</span>
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">CNOT</span>
                      <span className="p">(</span>
                      <span className="n">alice</span>
                      <span className="p">,</span>{" "}
                      <span className="n">bob</span>
                      <span className="p">),</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">CZ</span>
                      <span className="p">(</span>
                      <span className="n">msg</span>
                      <span className="p">,</span>{" "}
                      <span className="n">bob</span>
                      <span className="p">)])</span>
                      {"\n"}
                      <span className="n">final_results</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">sim</span>
                      <span className="o">.</span>
                      <span className="n">simulate</span>
                      <span className="p">(</span>
                      <span className="n">circuit</span>
                      <span className="p">)</span>
                      {"\n"}
                      <span className="n">teleported</span>{" "}
                      <span className="o">=</span>{" "}
                      <span className="n">cirq</span>
                      <span className="o">.</span>
                      <span className="n">bloch_vector_from_state_vector</span>
                      <span className="p">(</span>
                      <span className="n">final_results</span>
                      <span className="o">.</span>
                      <span className="n">final_state</span>
                      <span className="p">,</span> <span className="mi">2</span>
                      <span className="p">)</span>
                      {"\n"}
                      <span className="nb">print</span>
                      <span className="p">(</span>
                      <span className="s2">"x: "</span>
                      <span className="p">,</span> <span className="n">np</span>
                      <span className="o">.</span>
                      <span className="n">around</span>
                      <span className="p">(</span>
                      <span className="n">teleported</span>
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
                      <span className="n">teleported</span>
                      <span className="p">[</span>
                      <span className="mi">1</span>
                      <span className="p">],</span>{" "}
                      <span className="mi">4</span>
                      <span className="p">),</span>{" "}
                      <span className="s2">"z: "</span>
                      <span className="p">,</span> <span className="n">np</span>
                      <span className="o">.</span>
                      <span className="n">around</span>
                      <span className="p">(</span>
                      <span className="n">teleported</span>
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
                      x:{"  "}0.2422 y:{"  "}-0.9475 z:{"  "}-0.2089{"\n"}
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
                <p>
                  <strong>
                    Voilà! Bob has a qubit that is identical to Alice’s, even though it was never sent to him!
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="cell border-box-sizing text_cell rendered">
            <div className="prompt input_prompt"></div>
            <div className="inner_cell">
              <div className="text_cell_render border-box-sizing rendered_html">
                <h3 id="If-you-want-to-learn-more-about-quantum-teleportation">
                  If you want to learn more about quantum teleportation
                  <a
                    className="anchor-link"
                    href="#If-you-want-to-learn-more-about-quantum-teleportation"
                  />
                </h3>
                <p>
                  
                    The source code (Juptyer notebooks) for this tutorial is available <a href="https://github.com/wearecuriee/qcsandbox_tutorials/blob/master/quantum_teleportation.ipynb">here</a>. If you enjoyed what you read, check out <a href="https://quantum.country/teleportation">"How quantum teleportation works"</a> by Andy
                    Matuschak and Michael Nielsen.
                  
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
    <Footer />
  </>
);
