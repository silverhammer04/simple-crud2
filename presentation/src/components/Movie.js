import React from 'react';

import DelConBtn from './DelConBtn';

const Movie = ({movie, deleteMovies, refresh}) => {
    return(
        <li>
            {movie.title}
            <DelConBtn
                dialog={["Delete", "Confirm Delete"]}
                action={() => deleteMovies(movie._id, refresh)} />
            {/* <button 
            onClick={() => deleteMovies(movie._id, refresh)}>
                Delete</button> */}
        </li>
    )
}

export default Movie