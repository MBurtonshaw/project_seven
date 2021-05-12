import React from "react";
import Results from "./Results";

const Home = (props) => {
    const attr = props;
    return(
    <div className="home-container">
        <div className="photo-container">
            <h2>Home</h2>
                <Results onSearch={attr.onSearch} data={attr.data} />
        </div>
    </div>
    );
};

export default Home;