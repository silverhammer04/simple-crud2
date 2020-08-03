import React from 'react';

const Movie = ({movie, deleteMovies, refresh}) => {
    return(
        <li>
            {movie.title}
            <button 
            onClick={() => deleteMovies(movie._id, refresh)}>
                Delete</button>
        </li>
    )
}

export default Movie