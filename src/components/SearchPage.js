import React from "react";
import Results from "./Results";

const SearchPage = (props) => {
    return(
    <div className="home-container">
        <div className="photo-container">
            <Results data={props.data}/>
        </div>
    </div>
    );
};

export default SearchPage;