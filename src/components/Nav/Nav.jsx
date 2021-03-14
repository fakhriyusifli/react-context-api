import React, {useContext} from 'react';
import classes from './Nav.module.scss';
import {MovieContext} from '../MovieContext/MovieContext';

const Nav =() =>{
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className={classes.root}>
            <h3 className={classes.heading}>Favorite Movies</h3>
            <p className={classes.para}>List of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;