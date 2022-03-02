import React, {useState } from "react";
import { HeaderSection } from "../Components/HeaderSection";
import { CarrouselSection } from "./CarrouselSection";
import { CarrouselItem } from "../Components/CarrouselItem";
import {MoviesSection} from '../Containers/MoviesSection';
import { GridMovies } from "./GridMovies";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { getPopularMovies, getNowPlayingMovies } from "../utils/getMovies";
import { getInitialState } from "../utils/initialState";
import { useApis } from "../hooks/Api";
import { Modal } from "../Components/Modal";
import { InfoMovie } from "../Components/InfoMovie/InfoMovie";
const App = () => {

  const [modal, setModal] = useState(false)

  const {POPULAR_MOVIES_API, NOW_PLAYING_MOVIES_API, setPage} = useApis()
  const {movies} = getPopularMovies(POPULAR_MOVIES_API)
  const {playingMovies} = getNowPlayingMovies(NOW_PLAYING_MOVIES_API)

  const {state, search, allMovies, mostValueMovies, lessValueMovies, handleSearchMovies, getInfoMovie} = getInitialState(movies)

  return (
    <main>
      <GlobalStyles/>
      <HeaderSection 
        allmovies={allMovies} 
        mostValue={mostValueMovies}
        lessValue={lessValueMovies}
        handleSearch={handleSearchMovies}
        search={search}
      />
      <CarrouselSection velocidad='1000' intervalo='3000'>
        {playingMovies.map(movie => (
          <CarrouselItem key={movie.id} backdrop_path={movie.backdrop_path}/>
        ))}
      </CarrouselSection>
      <MoviesSection setPage={setPage}>
        <GridMovies 
          movies ={movies}
          state={state}
          search={search}
          infoMovie={getInfoMovie}
          setModal={setModal}
        />
      </MoviesSection>
      {modal && 
        <Modal>
          <InfoMovie state={state} setModal={setModal}/>
        </Modal>
      }
    </main>
  )
}

export {App}