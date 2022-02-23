import React from "react";
import {Article, VoteContainer, VoteAverage, ImageMovie, ImageStar} from './styles'
import starImage from '../../static/icons/icon-start.svg'

const MovieItem = ({poster_path, title, vote_average}) => {
  const mostVote = vote_average >= 7 && '#FED941'
  return (
    <Article>
      <ImageMovie src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <VoteContainer inputColor ={mostVote}>
        <ImageStar src={starImage} alt="starImage" />
        <VoteAverage>{vote_average}</VoteAverage>
      </VoteContainer>
    </Article>
  )
}

export {MovieItem}