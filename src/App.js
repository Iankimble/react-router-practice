import React from 'react';
import NavBar from "./Components/NavBar";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Store from "./Pages/Store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
