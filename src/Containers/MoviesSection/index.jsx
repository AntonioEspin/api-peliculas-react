import React from "react";
import {ContainerMovies, Title} from './styles'

const MoviesSection = ({children}) => {
  return (
    <ContainerMovies>
      <Title>Todas las peliculas</Title>
      {children}
    </ContainerMovies>
  )
}

export {MoviesSection}