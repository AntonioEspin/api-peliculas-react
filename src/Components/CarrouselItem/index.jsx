import React from "react";
import IconPlay from '../../static/icons/icon-play.svg'
import IconPlus from '../../static/icons/icon-plus.svg'
import {Article, ContainerButtons, Button} from './styles'

const CarrouselItem = () => {
  return (
    <Article>
      <img src="" alt="" />
      <ContainerButtons>
        <Button><img src={IconPlay} alt="IconPlay" />VER AHORA</Button>
        <Button plusButton><img src={IconPlus} alt="IconPlus" />VER DESPUÉS</Button>
      </ContainerButtons>
    </Article>
  )
}

export {CarrouselItem}