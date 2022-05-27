import React from 'react'
import Card from '../components/Card';
import { Link } from 'react-router-dom'

export const MovieList = (props) => {
    return (
        <>
            {props.movies.map(movie =>
                <div key={movie.poster_path}>
                    <Link to={`/movies/${movie.id}`}>
                        <Card image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} name={movie.title} />
                    </Link>
                </div>
            )}
        </>
    )
}

export default MovieList;