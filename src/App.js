import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {

render() {
    return (
      <BrowserRouter>
        <div className="container">
        <h1>Picture Search</h1>

          <Switch>
            {/* Home route */}
            <Route exact path="/" component={ () => <Main /> } />

            {/* Headers passed down as components to initiate a search when mounted */}
            {/* Included for NavLink purposes in SearchForm.js */}
            <Route path="/cats" component={ () => <Main header={ "cats" } /> } />
            <Route path="/dogs" component={ () => <Main header={ "dogs" }/> } />
            <Route path="/birds" component={ () => <Main header={ "birds" }/> } />
            <Route path="/:term" component={ () => <Main /> } />

            {/* 404 Error- in progress */}
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;