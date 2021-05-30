import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import api from "./components/Config";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      pics: [

      ]
    }
  }

//Search function sending an axios request to fetch data from flikr based on the search query
//The resulting pictures and the query are saved to state
performSearch_fromApp = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
        this.setState({ query: query });
        this.setState({ pics: response.data.photos.photo });
  })
}

render() {
    return (
      <BrowserRouter>
        <div className="container">
        
        <h1>Picture Search</h1>
        <SearchForm onSearch={ this.performSearch_fromApp} />

          <Switch>
            {/* Home route */}
            <Route exact path="/" component={ () => <Redirect to="/dogs" /> }/>

            {/* Headers passed down as props to initiate a search when Main.js is mounted */}
            {/* Also for NavLink purposes in SearchForm.js */}
            <Route exact path="/cats" component={ () => <Main header={ "cats" } /> } />
            <Route exact path="/dogs" component={ () => <Main header={ "dogs" } /> } />
            <Route exact path="/birds" component={ () => <Main header={ "birds" } /> } />
            <Route path="/:term" component={ () => <Search header={ this.state.query } data={ this.state.pics }/> } />

            {/* 404 Error- in progress */}
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;