import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import api from "./components/Config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: []
    };
  }

componentDidMount() {
  
}

performSearch(query="cats") {
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
          <Switch>
            <Route exact path="/" component={() => <Home onSearch={this.performSearch} data={this.state.pics}/> } />
            <Route path="/cats" component={Home}></Route>
            <Route path="/dogs" component={Home}></Route>
            <Route path="/computers" component={Home}></Route>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
