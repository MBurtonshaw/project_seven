import { React, Component} from "react";
import Pic from "./Pic";
import NotFound from "./NotFound";
import api from "./Config";
import axios from "axios";
import SearchForm from "./SearchForm";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ],
      query: "",
      //isLoading state - in progress
      isLoading: false
    }
  }

//This is setting the header in state^ to the query passed down through props in App.js
//This is to catch when a page loads based on a click of the NavLinks on SearchForm.js
//If nothing was passed down, for example when the page first loads, "nature" is the default header
  componentDidMount() {
    this.setState({ query: this.props.header });
    if (this.props.header === "cats") {
      this.performSearch("cats");
    } else if (this.props.header === "dogs") {
      this.performSearch("dogs");
    } else if (this.props.header === "birds") {
      this.performSearch("birds");
    } else {
      this.performSearch("nature");
    } 
  }

//Search function sending an axios request to fetch data from flikr based on the search query
//The resulting pictures and the query are saved to state
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
        this.setState({ pics: response.data.photos.photo });
        this.setState({ query: query });
    })
  }

  //Rendering the fetched pictures dynamically & mapping them to the browser
  //If there are no results, the NotFound component is returned
  render() {
    const results = this.state.pics;
    let list = results.map(pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/>);
    if (results.length <= 0 ) {
      return(<NotFound />);
    }
    
    return(
      <div className="home-container">

        {/* Passing the search function and query as props to SearchForm.js */}
        <SearchForm onSearch={ this.performSearch } query={ this.state.query }/>

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