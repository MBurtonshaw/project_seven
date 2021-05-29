import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import api from "./components/Config";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ],
      query: "",
      //isLoading state - in progress
      isLoading: false
    }
  }

  performSearch = (query = "nature") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
          this.setState({ pics: response.data.photos.photo });
          this.setState({ query: query });
    })
  }

  componentDidMount() {
    this.performSearch("nature");
  }

render() {
    return (
      <BrowserRouter>
        <div className="container">
        <h1>Picture Search</h1>

          <Switch>
            {/* Home route */}
            <Route exact path="/" component={ () => <Redirect to="/dogs" /> }/>
            {/* Headers passed down as props to initiate a search when Main.js is mounted */}
            {/* Also for NavLink purposes in SearchForm.js */}
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