import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import api from "./components/Config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Birds from "./components/Birds";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ],
      header: ""
    }
  }

componentDidMount() {
    this.performSearch("nature");
}

clearState = () => {
  this.setState({ header: "" });
  this.setState({ pics: "" });
}

performSearch(query) {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
    if (response.data.photos.total > 0) {
      this.setState({ pics: response.data.photos.photo });
      this.setState({ header: query });
    } else {
      return(<NotFound />)
    }

  })
}

render() {
    return (
      <BrowserRouter>
        <div className="container">
        <h1>Picture Search</h1>
        <SearchForm onSearch={ this.performSearch.bind(this) } />
          <Switch>
            <Route exact path="/" component={ () => <Home data={ this.state.pics } header={ this.state.header } /> } />
            <Route path="/cats" component={ () => <Cats data={ this.state.pics } header={ this.state.header } /> } />
            <Route path="/dogs" component={ () => <Dogs data={ this.state.pics } header={ this.state.header } /> } />
            <Route path="/birds" component={ () => <Birds data={ this.state.pics } header={ this.state.header } /> } />
            <Route path="/search" component={ () => < Search data={ this.state.pics } header={ this.state.header } /> } />
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;