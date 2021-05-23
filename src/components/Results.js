import React from "react";
import Pic from "./Pic";

const Results = (props) => {
  const list = props.data.map(pic => <Pic title={ pic.title } src={ `https://live.staticflickr.com/${ pic.server }/${ pic.id }_${ pic.secret }_w.jpg` } key={ pic.id }/>);
  return(
    <div className="home-container">
      <div className="photo-container">
      <h2> {
          props.header
        } pics </h2>
        <ul>
          { list }
        </ul>
      </div>
    </div>
  );
}

export default Results;