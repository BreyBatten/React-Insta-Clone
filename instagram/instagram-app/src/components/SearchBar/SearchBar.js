import React from "react";

function SearchBar(props) {
    return (
        <div className="SearchBarHeader">
            <h1>Instagram</h1>
            <input
                type="text"
                placeholder="search"
            />
        </div>
    )
}

export default SearchBar;