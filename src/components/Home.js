import React from "react";
import Results from "./Results";

const Home = (props) => {
    return(
    <div className="home-container">
        <div className="photo-container">
            <h2>Home</h2>
            <ul>
                <Results onSearch={props.onSearch} data={props.data}/>
            </ul>
        </div>
    </div>
    );
};

export default Home;