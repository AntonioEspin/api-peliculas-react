import { useState } from "react"

const KEY = process.env.KEY


const useApis = () => {
  const [page, setPage] = useState(1)
  console.log(page)
  
  const POPULAR_MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=es-MX&page=${page}`
  
  const NOW_PLAYING_MOVIES_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=es-MX&page=1&limit=4`

  return {POPULAR_MOVIES_API, NOW_PLAYING_MOVIES_API, setPage}
}

export {
  useApis
}