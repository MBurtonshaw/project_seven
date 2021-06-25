import './css/App.css';
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      isLoading: false
    }
  }

  //Checking to see if there was a search executed without a url change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.messenger(this.state.query);
    }
  }

//Search function sending an axios request to fetch data from flikr based on the search query
//The resulting pictures and the query are saved to state
  messenger = (query) => {
        this.setState({ isLoading: true }, () => {     
        this.setState({ query: query });
        this.setState({ isLoading: false });
        })
}

render() {
    return (
      <BrowserRouter>
        <div className="container">
        
        <h1>Picture Search</h1>

          {/* Passing down function to SearchForm.js to retrieve the search query and then pass it to Main.js */}
          <SearchForm onSearch={this.messenger}/>

          <Switch>
            {/* Home route */}
            <Route exact path="/" component={ () => <Redirect to="/dogs" /> }/>

            {/* Headers passed down as props to initiate a search when Main.js is mounted */}
            {/* Also for NavLink purposes in SearchForm.js */}
            {/* :term route is rendered conditionally based on a search query in SearchForm.js */}
            {/* This search query is passed down as a header to Main.js as well */}
            <Route exact path="/cats" component={ () => <Main header={ "cats" } /> } />
            <Route exact path="/dogs" component={ () => <Main header={ "dogs" } /> } />
            <Route exact path="/birds" component={ () => <Main header={ "birds" } /> } />
            <Route path="/:term" component={ () => <Main header={this.state.query}/> } />

            {/* 404 Error */}
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;