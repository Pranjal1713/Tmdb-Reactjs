import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = ()=> {
    return (
        <div className="header">
            <div className="headerleft">
                <Link to="/"><img className='header_icon' src="https://seeklogo.com/images/I/imdb-logo-AF81176825-seeklogo.com.png?v=638133712700000000" alt="..." /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none" }}> <span>Popular</span> </Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none" }}> <span>Top Rated</span> </Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none" }}> <span>Upcoming</span> </Link>
            </div>
        </div>
    )
}


export default Header