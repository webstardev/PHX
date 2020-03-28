import 'aframe'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Tutorials from "./pages/tutorials";
import Hello from "./pages/tutorials/Hello";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutorials" component={TutorialsRoute} />                      
        </Switch>
      </Router>
    </>
  );
}

function TutorialsRoute(props) {
  return (
    <>
      <Route exact path={props.match.path} component={Tutorials} />
      <Route path={`${props.match.path}/hello`} component={Hello} />      
    </>
  )
}

export default App;
