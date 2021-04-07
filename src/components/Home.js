import React from "react";
import Results from "./Results";
import SearchForm from "./SearchForm";

const Home = (props) => {
    return(
    <div className="home-container">
        <SearchForm onSearch={props.onSearch}/>
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Results onSearch={props.onSearch} data={props.data}/>
            </ul>
        </div>
    </div>
    );
};

export default Home;