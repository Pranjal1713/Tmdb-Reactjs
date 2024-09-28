import React, { useEffect, useState } from 'react'
import "./movieList.css"
import { useParams } from 'react-router-dom'
import Cards from '../card/card'



const MovieList = ()=>{
    const [movieList , setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() =>{
        getData()
    })

    useEffect(() =>{
        getData()
    })


    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=95848348eeee8bba1f3267b01d8ac8a4`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return(
        <div className='movie__list'>
            <h2 className="list__item">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )


}

export default MovieList