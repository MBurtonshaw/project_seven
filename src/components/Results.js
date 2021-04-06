import React from "react";
import Gif from "./Gif";

const Results = (props) => {
  const gifs = props.data;
  //const gifs = props.data.photos;
  //const gifs = props.data.photos.photo;
  //const final = gifs.map(gif => <Gif />);
  console.log(gifs);
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        
      </ul>
    </div>);
};

export default Results;