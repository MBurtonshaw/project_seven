import { React, Component} from "react";
import Pic from "./Pic";
import NotFound from "./NotFound";
import api from "./Config";
import axios from "axios";
import SearchForm from "./SearchForm";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      pics: [
        
      ],
      query: ""
    }
  }

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

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ api }&tags=${ query }&per_page=24&format=json&nojsoncallback=1`).then(response => {
        this.setState({ pics: response.data.photos.photo });
        this.setState({ query: query });
    })
  }
  render() {
    const results = this.state.pics;
    let list = results.map(pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/>);
    if (results.length <= 0) {
      return(<NotFound/>);
    }

    return(
      <div className="home-container">
        <SearchForm onSearch={ this.performSearch }/>
        <h2> {
            this.state.query
          } pics </h2>
        <div className="photo-container">

          <ul>
            { list }
          </ul>
        </div>
      </div>
    );
  }
}

export default Results;