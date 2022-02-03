import React from "react";
import { HeaderSection } from "../Components/HeaderSection";
import { CarrouselSection } from "./CarrouselSection";
import { CarrouselItem } from "../Components/CarrouselItem";
import { GlobalStyles } from "../Styles/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <HeaderSection/>
      <CarrouselSection>
        <CarrouselItem/>
      </CarrouselSection>
    </>
  )
}

export {App}