import React from "react";
import Pic from "./Pic";

const Results = (props) => {
  const list = props.data.map(pic => <Pic title={pic.title} src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg`} key={pic.id}/>);
  return(
    <ul>
      {list}
      </ul>
    
    
  );
}

export default Results;