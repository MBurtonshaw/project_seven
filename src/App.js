import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Main from "./components/Main";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import hashHistory from "react";

class App extends Component {

render() {
    return (
      <BrowserRouter history={hashHistory}>
        <div className="container">
        <h1>Picture Search</h1>
          <Switch>
            <Route exact path="/" component={ () => <Main /> } />
            <Route path="/cats" component={ () => <Main header={ "cats" } /> } />
            <Route path="/dogs" component={ () => <Main header={ "dogs" }/> } />
            <Route path="/birds" component={ () => <Main header={ "birds" }/> } />
            <Route path="/search/:term" component={ () => <Main /> } />
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;