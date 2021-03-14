import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    
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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );

} 