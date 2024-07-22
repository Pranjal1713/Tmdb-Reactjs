import React, { useEffect, useState } from 'react';
import "./movieDetail.css";
import { useParams } from 'react-router-dom';

const Movie = () => {
    const [currentMovieDetail , setCurrentMovieDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(id);
                setCurrentMovieDetail(data);
            } catch (error) {
                alert("Error fetching data. Please try again later.");
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [id]);

    const getData = async (id) => {
        try {
            let response  = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95848348eeee8bba1f3267b01d8ac8a4`);
            let data = await response.json(); // Await the promise here
            return data;
        } catch (e) {
            alert("error");
            return null;
        }
    };

    return (
        <div className="movie">
            {/* <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail && currentMovieDetail[0] && currentMovieDetail[0].backdrop_path ? currentMovieDetail[0].backdrop_path : ""}`} alt='...' />
            </div> */}
            <div className="movie__intro">
                {currentMovieDetail && currentMovieDetail[0] && currentMovieDetail[0].backdrop_path && (
                    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail[0].backdrop_path}`} alt='...' />
                )}
            </div>

            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path: ""}`} alt='...' />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {currentMovieDetail &&
                                currentMovieDetail[0] &&
                                currentMovieDetail[0].genres &&
                                currentMovieDetail[0].genres.map((genre) => (
                                    <span key={genre.id} className="movie__genre">
                                         {genre.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {currentMovieDetail && currentMovieDetail.homepage && (
                    <a href={currentMovieDetail.homepage} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p>
                    </a>
                )}
                {currentMovieDetail && currentMovieDetail.imdb_id && (
                    <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p>
                    </a>
                )}
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {currentMovieDetail &&
                    currentMovieDetail.production_companies &&
                    currentMovieDetail.production_companies.map(company => (
                        company.logo_path && (
                            <span className="productionCompanyImage" key={company.id}>
                                <img className="movie__productionCompany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt='...' />
                                <span>{company.name}</span>
                            </span>
                        )
                    ))}
            </div>
        </div>
    );
};

export default Movie;
