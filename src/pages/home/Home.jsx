import React, { useEffect, useState } from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';


const Home = ()=>{

    const [popularMovies , setPopularMovies] = useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=95848348eeee8bba1f3267b01d8ac8a4")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return(
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration: "none" , color: "White"}} to={`/movie/${movie.id}`}>
                                <div className="posterImage">
                                    <img src={`https://images.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="..." />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average: ""}
                                            <i className='fas fa-star'/> {" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__discription">{movie ? movie.overview: ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}

export default Home