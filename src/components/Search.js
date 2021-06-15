import { React } from "react";
import Pic from "./Pic";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

const Search = (props) => {
    const { term } = useParams();
    console.log( term );
  //Rendering the fetched pictures dynamically & mapping them to the browser
  //If there are no results, the NotFound component is returned
    const results = props.data;
    let list = results.map( pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/>);
    
    if ( props.isLoading === true ) {
      return( <h1>Loading...</h1> );
    } else if ( results.length <= 0 ) {
      return( <NotFound /> );
    }

    return(
      <div className="home-container">

        {/* Dynamically changing the header based on the search query in state */}
        <h2> {
            props.header
          } pics </h2>

        <div className="photo-container">
          <ul>

            { list }

          </ul>
        </div>
      </div>
    );
}

export default Search;