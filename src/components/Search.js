import { React, Component } from "react";
import Pic from "./Pic";
import NotFound from "./NotFound";

class Search extends Component {
  render() {

  //Rendering the fetched pictures dynamically & mapping them to the browser
  //If there are no results, the NotFound component is returned
    const results = this.props.data;
    let list = results.map(pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/>);
    
    if (results.length <= 0 ) {
      return(<NotFound />);
    }
    
    return(
      <div className="home-container">

        {/* Dynamically changing the header based on the search query in state */}
        <h2> {
            this.props.header
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

export default Search;