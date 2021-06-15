import { React, Component } from "react";
import Pic from "./Pic";
import api from "./Config";
import axios from "axios";

class Main extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      pics: [
        
      ]
    }
  }

//This is setting the header in state^ to the query passed down through props in App.js
//This is to catch when a page loads based on a click of the NavLinks on SearchForm.js
  componentDidMount() {
    this._isMounted = true;
    this.performSearch_fromMain(this.props.header);
  }

//Search function sending an axios request to fetch data from flikr based on the search query
//The resulting pictures and the query are saved to state
  performSearch_fromMain = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
        if (this._isMounted) {
          this.setState({ pics: response.data.photos.photo, query: query });
        }
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  //Rendering the fetched pictures dynamically & mapping them to the browser
  //If there are no results, the NotFound component is returned
  render() {
    const results = this.state.pics;
    let list = results.map( pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/> );
    
    if ( results.length === 0 ) {
      return( <h1>Loading...</h1> );
    }
    
    return(
      <div className="home-container">

        {/* Dynamically changing the header based on the search query in state */}
        <h2> {
            this.state.query
          } pics </h2>

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

export default Main;