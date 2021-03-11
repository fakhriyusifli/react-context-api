import React from "react";

const Movie = (props) =>{

    return(
        <div>
            <h3>Name: {props.name}</h3>
            <p>Price: {props.price}</p>
        </div>
    );
};

export default Movie;