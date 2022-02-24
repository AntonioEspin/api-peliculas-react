import React from "react";
import {ContainerMovies} from './styles'

const MoviesSection = ({children}) => {
  return (
    <ContainerMovies>
      {children}
    </ContainerMovies>
  )
}

export {MoviesSection}