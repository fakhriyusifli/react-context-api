import React, {useState} from "react";

const MovieList = () =>{

    const [movies, setMovies] = useState([
        {
            name: 'John Wick',
            price: '10$',
            id: 451456
        },
        {
            name: 'Lord of The Rings',
            price: '12$',
            id: 123456
        },
        {
            name: 'Edge of Tomorrow',
            price: '9.99$',
            id: 654321
        }
    ]);

    return(
        <div>
            {movies.map(movie =>(
            <li>Movie name: {movie.name}</li>
        ))}
        </div>
    );
};

export default MovieList;