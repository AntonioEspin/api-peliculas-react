import React from "react";
import IconPlay from '../../static/icons/icon-play.svg'
import IconPlus from '../../static/icons/icon-plus.svg'
import {Article, ImgPosterMovie, ContainerButtons, Button} from './styles'

const CarrouselItem = ({backdrop_path}) => {

  return (
    <Article>
      <ImgPosterMovie src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt="" />
      <ContainerButtons>
        <Button><img src={IconPlay} alt="IconPlay" />VER AHORA</Button>
        <Button plusButton><img src={IconPlus} alt="IconPlus" />VER DESPUÉS</Button>
      </ContainerButtons>
    </Article>
  )
}

export {CarrouselItem}