import { React, Component } from "react";
import { withRouter } from "react-router-dom";
import Pic from "./Pic";
import api from "./Config";
import NotFound from "./NotFound";
import axios from "axios";

class Main extends Component {

  _isMounted = false;
  constructor() {
    super();
    this.state = {

      main_query: "",
      pics: [ ],
      isLoading: false

    }
  }

//This is setting the header in state^ to the query passed down through props in App.js
//This is to catch when a page loads based on a click of the NavLinks on SearchForm.js
  componentDidMount() {
      this.search( this.props.header );
}

//This is to allow the component to update based on the current search query, regardless of url changing or not
  componentDidUpdate( prevProps, prevState ) {
      if ( prevProps.location.pathname !== this.props.location.pathname ) {
        let searchTerm = this.props.location.pathname;
        let refined = searchTerm.substr( 1, searchTerm.length );
        this.setState({ main_query: refined });
        this.search( refined );
      }
  }

//Search function sending an axios request to fetch data from flikr based on the search query
//The resulting pictures and the query are saved to state
  search = ( query ) => {
    if ( !query ) {
      query = this.props.location.pathname;
      }  else {
      this.setState({ isLoading: true }, () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
              this.setState({ pics: response.data.photos.photo, main_query: query });
              this.setState({ isLoading: false });
            })
          });
    }
  }

  //Rendering the fetched pictures dynamically & mapping them to the browser
  //Renders a conditional loading message
  //If there are no results, the NotFound component is returned
  render() {
    const results = this.state.pics;
    let list = results.map( pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/> );
    
    if ( results.length === 0 && this.state.isLoading === true ) {
      return( <h1>Loading...</h1> );
    } else if ( results.length === 0 ) {
      return( <NotFound /> );
    }
    
    return(
      <div className="home-container">
        {/* Dynamically changing the header based on the search query in state */}
        <h2> { this.state.main_query } pics </h2>
        <div className="photo-container">
          <ul>

            {/* Mapping out the pictures */}
            { list }

          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);