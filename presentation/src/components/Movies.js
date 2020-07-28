import React from 'react';
import Movie from './Movie';

class Movies extends React.Component{
    state = {
        movies: [
            { title: "Waiting for Movies"}
        ]
    }
    getMovies = () => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/movies`)
        .then(responce => responce.json())
        .then(data => this.setState({movies:data}));
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const displayMovies = this.state.movies.map(movie =>
            <Movie key={movie._id} movie={movie}/>); 
        return (
            <ul>
                {displayMovies}
            </ul>
        )
    }   
}
export default Movies;