import { useState } from "react"

const initialState = {
  listMovies: [],
  // mostValue: [],
  // lessValue: [],
}

const getInitialState = (movies) => {
  
  const [state, setstate] = useState(initialState)

  const allMovies = () => {
    console.log('funciona')
    setstate({
      listMovies: []
      // ...state,
      // listMovies: movies,
      // mostValue: [],
      // lessValue: []
    })
  }

  const mostValueMovies = () => {
    setstate({
      ...state,
      listMovies: movies.filter(movie => movie.vote_average >= 7),
      // mostValue: movies.filter(movie => movie.vote_average >= 7),
      // lessValue: []
    })
  }

  const lessValueMovies = () => {
    setstate({
      ...state,
      listMovies: movies.filter(movie => movie.vote_average < 7),
      // mostValue: [],
      // lessValue: movies.filter(movie => movie.vote_average < 7)
    })
  }

  return {
    state,
    allMovies,
    mostValueMovies,
    lessValueMovies
  }
}

export {getInitialState}