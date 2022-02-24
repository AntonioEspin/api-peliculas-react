import styled from "styled-components";

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  place-items: center;
  gap: 48px 25px;
  width: 100%;
  height: auto;
  margin-top: 50px;
  & h2 {
    color: var(--white)
  }
`

export const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  color: var(--white);
`

export const NotMovies = styled.h2`
  color: var(--white);
`