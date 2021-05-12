import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import api from "./components/Config";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Results from "./components/Results";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ]
    };
  }

componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=dogs&per_page=24&format=json&nojsoncallback=1`).then(response => {
    this.setState({pics: response.data.photos.photo})
    })}


performSearch(query) {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then(response => {
    this.setState({pics: response.data.photos.photo});
  }).catch(
     error => console.log(error)
   );
}

render() {
  
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <Switch>
            <Route exact path="/" component={() => <Redirect to = "./Home"/>} />
            <Route path="/Home" component={() => <Home data={this.state.pics} onSearch={this.performSearch} />} />
            <Route path="/Cats" component={Home} />
            <Route path="/Dogs" component={Home} />
            <Route path="/Computers" component={Home} />
            <Route path="/Results" component={() => <Results data={this.state.pics}/> } />
            <Route component={NotFound} />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
