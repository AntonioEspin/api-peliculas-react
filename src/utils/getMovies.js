import { useEffect, useState } from "react";

const getPopularMovies = (API) => {
  const [movies, setMovies] = useState([])

  useEffect(async ()=>{
    const response = await fetch(API)
    const data = await response.json()
    setMovies(data.results)
  },[])

  return {movies}
}

const getNowPlayingMovies = (API) => {
  const [movies, setMovies] = useState([])

  useEffect(async ()=>{
    const response = await fetch(API)
    const data = await response.json()
    setMovies(data.results)
  },[])

  const playingMovies = movies.slice(1, 5)
  return {playingMovies}
}

export {getPopularMovies, getNowPlayingMovies}