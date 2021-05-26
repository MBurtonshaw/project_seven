import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Results from "./components/Results";
import api from "./components/Config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ],
      query: ""
    }
  }

  componentDidMount() {
    this.performSearch("nature");
  }

performSearch = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
      this.setState({ pics: response.data.photos.photo });
      this.setState({ query: query });
  })
}

render() {
    return (
      <BrowserRouter>
        <div className="container">
        <h1>Picture Search</h1>
        <SearchForm onSearch={ this.performSearch } query={ this.state.query } data={ this.state.pics } />
          <Switch>
            <Route path="/" component={ () => <Results onSearch={ this.performSearch } query={ this.state.query } data={this.state.pics} /> } />
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;