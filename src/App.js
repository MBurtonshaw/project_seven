import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";
import NotFound from "./components/NotFound";
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

      app_query: "",
      isLoading: false
      
    }
  }

  //Checking to see if there was a search executed without a url change
  componentDidUpdate( prevProps, prevState ) {
    if ( prevState.app_query !== this.state.app_query ) {
      this.send_message_to_main( this.state.app_query );
    }
  }

//Search function sending an axios request to fetch data from flikr based on the search query
//The resulting pictures and the query are saved to state
  send_message_to_main = ( query ) => {
        this.setState({ isLoading: true }, () => {     
        this.setState({ app_query: query });
        this.setState({ isLoading: false });
        })
}

render() {
    return (
      <BrowserRouter>
        <div className="container">
        
        <h1>Picture Search</h1>

          {/* Passing down function to SearchForm.js to retrieve the search query and then pass it to Main.js */}
          <SearchForm onSearch={ this.send_message_to_main }/>

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
            <Route path="/:term" component={ () => <Main header={ this.state.app_query }/> } />

            {/* 404 Error */}
            <Route component={ NotFound } />
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;