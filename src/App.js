import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Results from "./components/Results";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import hashHistory from "react";

class App extends Component {

render() {
    return (
      <BrowserRouter history={hashHistory}>
        <div className="container">
        <h1>Picture Search</h1>
          <Switch>
            <Route exact path="/" component={ () => <Results /> } />
            <Route path="/cats" component={ () => <Results header={ "cats" } /> } />
            <Route path="/dogs" component={ () => <Results header={ "dogs" }/> } />
            <Route path="/birds" component={ () => <Results header={ "birds" }/> } />
            <Route path="/search/:term" component={ () => <Results /> } />
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;