import 'aframe'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Tutorials from "./pages/tutorials";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/tutorials">
            <Tutorials />
          </Route>
          <Route path="/">
            <Home />
          </Route>    
        </Switch>
      </Router>
    </>
  );
}

export default App;
