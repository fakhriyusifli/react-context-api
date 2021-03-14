import React from 'react';
import './App.css';
import MovieList from "./components/MovieList/MovieList";
import Nav from './components/Nav/Nav';
import AddMovie from './components/AddMovie/AddMovie';
import {MovieProvider} from './components/MovieContext/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
