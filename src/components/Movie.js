import React from 'react';

const Movie = ({movie}) => {

    return(
        <>
            <h4> <a href={movie.url}>{movie.name}</a> </h4>
            
        </>
    )
}

export default Movie;