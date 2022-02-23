import React, { useEffect } from "react";
import { MovieItem } from "../../Components/MovieItem";
import {GridSection} from './styles';

const GridMovies = ({movies, state}) => {

  console.log(state)
  if (state.listMovies.length > 0) {
    return (
      <GridSection>
        {state.listMovies.map(movie => (
          <MovieItem 
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.original_title}
            vote_average={movie.vote_average}
          />
        ))}
      </GridSection>
    )
  }

  return (
    <GridSection>
      {movies.map(movie => (
        <MovieItem 
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.original_title}
          vote_average={movie.vote_average}
        />
      ))}
    </GridSection>
  )
}

export {GridMovies}