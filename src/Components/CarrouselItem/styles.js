import styled, {css} from "styled-components";

export const Article = styled.article`
  position: relative;
  overflow: hidden;
  transition: .3s ease all;
  min-width: 100%;
  height: 100%;
  z-index: 10;
`

export const ImgPosterMovie = styled.img`
  width: 100%;
  height: 346px;
  object-fit: fill;
  vertical-align: top;
`

export const ContainerButtons = styled.div`
  position: absolute;
  left: 24px;
  bottom: 32px;
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