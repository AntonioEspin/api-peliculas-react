import React, { useEffect, useRef } from "react";
import { MovieItem } from "../../Components/MovieItem";
import {GridSection, Title, NotMovies} from './styles';

const GridMovies = ({movies, state, search, infoMovie, setModal}) => {

   const title = search !== '' ? 'Resultados de busqueda': 'Todas las peliculas'
 

  if(search !== '') {
    return (
      <>
        <Title>{title}</Title>
        <GridSection>
          {state.searched.map(movie => (
            <MovieItem 
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              id={movie.id}
              getInfo={infoMovie}
              setModal={setModal}
            />
          ))}
        </GridSection>
      </>
    )
  }

  // if (state.searched.length === 0) {
  //   return (
  //     <NotMovies>{`No se encontraron resultados para ${search}`}</NotMovies>
  //   )
  // }

  if (state.mostValue.length > 0) {
    return (
      <>
        <Title>{`Más valoradas`}</Title>
        <GridSection>
          {state.mostValue.map(movie => (
            <MovieItem 
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              id={movie.id}
              getInfo={infoMovie}
              setModal={setModal}
            />
          ))}
        </GridSection>
      </>
    )
  }

  if (state.lessValue.length > 0) {
    return (
      <>
        <Title>{`Menos valoradas`}</Title>
        <GridSection>
          {state.lessValue.map(movie => (
            <MovieItem 
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              id={movie.id}
              getInfo={infoMovie}
              setModal={setModal}
            />
          ))}
        </GridSection>
      </>
    )
  }

  return (
    <>
      <Title>{title}</Title>
      <GridSection>
        {movies.map(movie => (
          <MovieItem 
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            id={movie.id}
            getInfo={infoMovie}
            setModal={setModal}
          />
        ))}
      </GridSection>
    </>
  )
}

export {GridMovies}