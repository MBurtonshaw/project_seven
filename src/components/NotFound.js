import React from "react";
import SearchForm from "./SearchForm";

const NotFound = () => (
    <div className="home-container">

        <SearchForm />
        <h1>Oops</h1>

        <div className="photo-container">

            <div>
                <h1>Not Found</h1>
                <h2>This search query has returned no results</h2>
            </div>
            
        </div>
    </div>
);

export default NotFound;