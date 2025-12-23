import React from 'react'

function Movies() {
  return (
    <div>
        <h1>Movies</h1>
        {movies.map(movie=>
        <div className='grid '>
            <img src={movie.image} alt="" />
            <p>{movie.name}</p>
            )}
        </div>
    </div>
  )
}

export default Movies