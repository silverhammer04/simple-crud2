import React, { useState } from 'react';
import UpdateMovie from './UpdateMovie';
import DelConBtn from './DelConBtn';

const Movie = ({movie, deleteMovies, refresh}) => {
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
    return(
        <li>
            <button
            onClick={()=> toggleForm()}>Update</button>
            {movie.title},
            {movie.year}
            <DelConBtn
                dialog={["Delete", "Confirm Delete"]}
                action={() => deleteMovies(movie._id, refresh)} />

        {update ? 
        <UpdateMovie movie={movie}
            toggleForm={toggleForm}
            refresh={refresh} /> : ''}
        </li>
    )
}

export default Movie