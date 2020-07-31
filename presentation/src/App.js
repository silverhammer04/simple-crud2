import React from 'react';
import './App.css';
import Movies from './components/Movies';
// import NewMovie from './components/NewMovie';
// import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Movies/>
      
      {/* <NewMovie addmovie={movie => Movie.addMovie(movie)}/> */}
    </div>
  );
}

export default App;
