import React, { useEffect, useRef } from "react";
import {ContainerMovies} from './styles'

const MoviesSection =  ({children, setPage}) => {
  const ref = useRef(null)
  
  useEffect( async ()=>{
    const observer = new IntersectionObserver((entries)=>{
      if (entries[0].isIntersecting) {
        setPage(prevState => prevState + 1)
      }
    }, {
      threshold: 1
    })

    setTimeout(()=>{
      observer.observe(ref.current)
    },500)
  }, [ref])

  return (
    <ContainerMovies>
      {children}
      <div ref={ref}></div>
    </ContainerMovies>
  )
}

export {MoviesSection}