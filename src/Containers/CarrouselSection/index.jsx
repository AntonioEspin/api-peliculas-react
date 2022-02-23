import React, { useCallback, useEffect, useRef } from "react";
import {Section} from './styles'

const CarrouselSection = ({children, velocidad, intervalo}) => {

  const slideShow = useRef(null)
  const intervalSlideShow = useRef(null)

  const nextSlide = useCallback(()=>{
    if(slideShow.current.children.length > 0) {

      const firstElement = slideShow.current.children[0]
      slideShow.current.style.transition = `${velocidad}ms ease-out all`
      const sizeSlide = slideShow.current.children[0].offsetWidth
      slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

      const transition = () => {
				slideShow.current.style.transition = 'none';
				slideShow.current.style.transform = `translateX(0)`;
				slideShow.current.appendChild(firstElement);
				slideShow.current.removeEventListener('transitionend', transition);
			}

			slideShow.current.addEventListener('transitionend', transition);
    }
  },[velocidad])

  useEffect(()=>{
    intervalSlideShow.current = setInterval(()=>{
      nextSlide()
    },intervalo)

    slideShow.current.addEventListener('mouseenter', ()=>{
      clearInterval(intervalSlideShow.current)
    })

    slideShow.current.addEventListener('mouseleave', ()=>{
      intervalSlideShow.current = setInterval(()=>{
        nextSlide()
      },intervalo)
    })
  },[intervalo, velocidad])

  return (
    <Section ref={slideShow}>
      {children}
    </Section>
  )
}

export {CarrouselSection}