import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import NoResults from "./NoResults";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import apiKey from "./Config";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

componentDidMount() {
   axios.get(apiKey).then(response => {
     console.log(response)
   })
}
render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm/>
          <Route exact path="/" component={Home}/>
          <Route path="/dogs" component={Results}/>
          <Route path="/cats" component={Results}/>
          <Route path="/computers" component={Results}/>
          <Route path="/no_results" component={NoResults}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
