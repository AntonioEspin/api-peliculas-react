import React from "react";
import { MovieItem } from "../MovieItem";
import IconPlay from '../../static/icons/icon-play.svg'
import IconPlus from '../../static/icons/icon-plus.svg'
import {SectionMovie, ContainerMovie, Exit, FigureMovie, DetailMovie, ContainerButtons, Button } from './styles'

const InfoMovie = ({state, setModal}) => {
  console.log(state.infoMovie)

  const handleModal = () => {
    setModal(prevState => !prevState)
  }
  return (
    <SectionMovie>
      {state.infoMovie.map(movie => (
        <ContainerMovie key={movie.id}>
          <Exit onClick={handleModal}>X</Exit>
          <FigureMovie>
            <MovieItem
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
            />
          </FigureMovie>
          <DetailMovie>
            <h2>{movie.title}</h2>
            {movie.overview 
              ? <p>{movie.overview}</p>
              : <p>No hay información para mostrar</p>
            }
            <span>{movie.release_date}</span>
            {/* <span>2</span>
            <span>3</span> */}
            <ContainerButtons>
              <Button><img src={IconPlay} alt="IconPlay" />VER AHORA</Button>
              <Button plusButton><img src={IconPlus} alt="IconPlus" />VER DESPUÉS</Button>
            </ContainerButtons>
          </DetailMovie>
        </ContainerMovie>
      ))}
    </SectionMovie>
  )
}

export {InfoMovie}