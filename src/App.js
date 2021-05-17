import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import api from "./components/Config";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ]
    }
  }

/*componentDidMount() {
    this.performSearch("art");
}*/


performSearch(query) {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then(response => {
  this.setState({pics: response.data.photos.photo});
  }).catch(
     error => console.log(error)
   )
  }



render() {
  
/*
  Make a home page, search page, and page for each dog, cat, computers, all w a results section
*/




    return (
      <BrowserRouter>
        <div className="container">
          
          <Switch>
          <SearchForm onSearch={this.performSearch}/>
            <Route exact path="/" component={() => <Redirect to = "./home"/>} />
            <Route path="/home" component={() => <Home data={this.state.pics} />} />
            <Route path="/cats" component={() => <Home data={this.state.pics} />} />
            <Route path="/dogs" component={() => <Home data={this.state.pics} />} />
            <Route path="/computers" component={() => <Home data={this.state.pics} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
