import React, {useState, useContext} from "react";
// import Movie from "../Movie/Movie";
import {MovieContext} from '../MovieContext/MovieContext';

const MovieList = () =>{
    const value = useContext(MovieContext);

    return(
        <div>
            {value}
            {/* {movies.map(movie =>(
                <Movie 
                    name={movie.name} 
                    price={movie.price} 
                    key={movie.id}
                />
            ))} */}
        </div>
    );
};

export default MovieList;