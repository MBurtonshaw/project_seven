import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import NoResults from "./NoResults";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

componentDidMount() {
   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e5608e7404c4d236954fac0178b116e9&format=json&nojsoncallback=1`).then(response => {
     this.setState({gifs: response.data});
   }).catch(
      error => console.log(error)
    );
}

performSearch() {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e5608e7404c4d236954fac0178b116e9&format=json&nojsoncallback=1`).then(response => {
    this.setState({gifs: response.data});
  }).catch(
     error => console.log(error)
   );
}

render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Route exact path="/" component={ () => <Results onSearch={this.performSearch}data={this.state.gifs}/> } />
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
