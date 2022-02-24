import { useState } from "react"

const initialState = {
  listMovies: [],
  mostValue: [],
  lessValue: [],
  searched: [],
}

const getInitialState = (movies) => {
  
  const [state, setstate] = useState(initialState)
  const [search, setSearch] = useState('')

  // Manejador para buscar las peliculas
  const handleSearchMovies = (event) => {
    setSearch(event.target.value)
    const value = search.toLowerCase()
    searchMovies(value)
  }
  // --------------------------------------------------------------------

  // Funciones para modificar el estado del Grid de pelicular
  const allMovies = () => {
    setstate({
      listMovies: [],
      mostValue: [],
      lessValue: [],
      searched: [],
    })
  }

  const mostValueMovies = () => {
    setstate({
      ...state,
      mostValue: movies.filter(movie => movie.vote_average >= 7),
      Movies: [],
      lessValue: [],
      searched: [],
    })
  }

  const lessValueMovies = () => {
    setstate({
      ...state,
      lessValue: movies.filter(movie => movie.vote_average < 7),
      ostValue: [],
      mostValue: [],
      searched: [],
    })
  }

  const searchMovies = (payload) => {
    setstate({
      ...state,
      searched: movies.filter(movie => movie.original_title.toLowerCase().includes(payload))
    })
  }
  // -----------------------------------------------------------------

  return {
    state,
    allMovies,
    mostValueMovies,
    lessValueMovies,
    searchMovies,
    handleSearchMovies,
    search
  }
}

export {getInitialState}