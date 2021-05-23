import React from "react";
import Results from "./Results";

const Cats = (props) => {
    return(
    <div className="home-container">
        <div className="photo-container">
            <Results data={ props.data } header={ props.header }/>
        </div>
    </div>
    );
};

export default Cats;