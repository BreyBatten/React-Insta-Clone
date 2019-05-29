import React from "react";
import iglogo from '../../assets/iglogo.png'
import instagramlike from '../../assets/instagramlike.png'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-header">
            <img 
                alt="instagram logo"
                src={iglogo}
                className="logo-img"
            />
            <h1>Instagram</h1>
            <input
                type="text"
                placeholder="search"
            />
            <img
                alt="instagram like"
                src={instagramlike}
                className="like-img"
            />
        </div>
    )
}

export default SearchBar;