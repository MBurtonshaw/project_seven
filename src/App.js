import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import api from "./components/Config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

componentDidMount() {
    this.performSearch("art");
}


performSearch(query) {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then(response => {
  this.setState({pics: response.data.photos.photo});
  }).catch(
     error => console.log(error)
   )
  }



render() {
{/* By having the main path not set to "exact path", I think the NavLinks will always point to Home component regardless of url, which should display the results component with dynamically loaded pictures */}
    return (
      <BrowserRouter>
        <div className="container">
        <SearchForm onSearch={this.performSearch}/>
          <Switch>
            <Route path="/" component={() => <Home data={this.state.pics} /> } />
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