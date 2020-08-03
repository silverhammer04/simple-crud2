import React from 'react';
import Movie from './Movie';
import NewMovie from './NewMovie';


class Movies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [ ]
        }
        this.getMovies = this.getMovies.bind(this);
    }
    getMovies () {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/movies`)
            .then(response => response.json())
            .then(data => this.setState({movies:data}));
    }
    componentDidMount() {
        this.getMovies();
    }
    
    deleteMovies = (id, refresh) => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/movies/${id}`, {
            method: "DELETE"
        }) .then(response => response.json())
            .then(data =>{ 
                console.log(data);
                refresh();
            })
    }
    
    render() {
        const displayMovies = this.state.movies.map(movie =>
            <Movie 
                key={movie._id} 
                movie={movie}
                deleteMovies={this.deleteMovies}
                refresh={this.getMovies} />
        ); 
        return (
            <div>
                <h2>Simple-Crud Project</h2>
                <NewMovie refresh={this.getMovies} />
                <ul>
                    {displayMovies} 
                
                </ul>
                             
            </div>    
        )
    }   
}
export default Movies;