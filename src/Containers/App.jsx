import React, { useEffect, useState } from "react";
import { HeaderSection } from "../Components/HeaderSection";
import { CarrouselSection } from "./CarrouselSection";
import { CarrouselItem } from "../Components/CarrouselItem";
import {MoviesSection} from '../Containers/MoviesSection';
import { GridMovies } from "./GridMovies";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { useGetPopularMovies, useGetNowPlayingMovies } from "../hooks/useGetMovies";
import { getInitialState } from "../utils/initialState";

const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?api_key=51463645e696823d295c4c7e1cf5fd7e&language=es-MX&page=1'

const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?api_key=51463645e696823d295c4c7e1cf5fd7e&language=es-MX&page=1&limit=4'

const App = () => {
  const {movies} = useGetPopularMovies(POPULAR_MOVIES_API)
  const {playingMovies} = useGetNowPlayingMovies(NOW_PLAYING_MOVIES_API)

  const {state, allMovies, mostValueMovies, lessValueMovies} = getInitialState(movies)

  return (
    <main>
      <GlobalStyles/>
      <HeaderSection 
        allmovies={allMovies} 
        mostValue={mostValueMovies}
        lessValue={lessValueMovies}
      />
      <CarrouselSection velocidad='1000' intervalo='3000'>
        {playingMovies.map(movie => (
          <CarrouselItem key={movie.id} backdrop_path={movie.backdrop_path}/>
        ))}
      </CarrouselSection>
      <MoviesSection>
        <GridMovies movies ={movies} state={state}/>
      </MoviesSection>
    </main>
  )
}

export {App}