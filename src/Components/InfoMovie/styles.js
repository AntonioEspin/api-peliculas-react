import styled, {css} from "styled-components";

export const SectionMovie = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerMovie = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 579px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Exit = styled.p`
  position: absolute;
  color: var(--white);
  top: 0;
  right: 0;
  font-size: 3rem;
  cursor: pointer;
`

export const FigureMovie = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DetailMovie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & h2 {
    color: var(--white);
    font-size: 4.8rem;
  }
  & p {
    color: var(--white);
    font-size: 1.8rem;
    line-height: 27px;
  }
  & span {
    color: var(--grey);
    font-size: 1.8rem;
    margin: 15px 0;
  }
`

export const ContainerButtons = styled.div`
  width: 424px;
  height: 48px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: inherit;
  border: none;
  border-radius: 5px;
  background-color: var(--yellow-primary);
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  & img {
    margin-right: 5px;
  }
  ${props => props.plusButton && css`
    width: 213px;
    border: 1px solid var(--yellow-primary);
    color: var(--yellow-primary);
    background-color: var(--black);
  `}
`