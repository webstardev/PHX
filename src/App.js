import 'aframe'
import React, { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Tutorials from "./pages/tutorials";
import Hello from "./pages/tutorials/Hello";
import Bloch from "./pages/tutorials/Bloch";
import Sandbox from "./pages/sandbox";

function App() {
  return (
    <>
      <Router>
        <Fragment>
        <ScrollToTop />
          <Switch>          
            <Route exact path="/" component={Home} />
            <Route path="/tutorials" component={TutorialsRoute} />
            <Route path="/sandbox" component={Sandbox} />
          </Switch>
        </Fragment>
      </Router>
    </>
  );
}

function TutorialsRoute(props) {
  return (
    <>
      <Route exact path={props.match.path} component={Tutorials} />
      <Route path={`${props.match.path}/hello`} component={Hello} />      
      <Route path={`${props.match.path}/bloch`} component={Bloch} />      
    </>
  )
}

export default App;
