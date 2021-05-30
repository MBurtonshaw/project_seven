import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class SearchForm extends Component {
    state = {
        searchText: ""
    }

    //Updating state as the user types the search query
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    //Handles the form submission; initiates a search of the query then pushes it to the url
    handleSubmit = e => {
        let search = this.state.searchText;
        e.preventDefault();
        this.props.onSearch(search);
        let path = `${search}`;
        this.props.history.push(path);
        e.currentTarget.reset();
    }

    render() {
        return(
            <div>

                {/* Form element */}
                <form className="search-form" onSubmit={ this.handleSubmit }>
                    <input type="search" id={ "form_input" } onChange={ this.onSearchChange } name="search" placeholder="Search" required/>
                    <button type="submit" className="search-button" >
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    </button>
                </form>

                {/* NavLinks, for style */}
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/cats" className="first_nav" activeClassName="first_nav_active" >Cats</NavLink></li>
                        <li><NavLink to="/dogs" className="second_nav" activeClassName="second_nav_active" >Dogs</NavLink></li>
                        <li><NavLink to="/birds" className="third_nav" activeClassName="third_nav_active" >Birds</NavLink></li>
                    </ul>
                </nav>

            </div>

        );
    }
}

//Exported using withRouter in order to be able to push the search query to the url
export default withRouter(SearchForm);