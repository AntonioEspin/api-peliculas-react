import styled from "styled-components";

export const Article = styled.article`
  position: relative;
  width: 220px;
  height: 330px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: transform 300ms ease-in-out;
    border-radius: 10px;
  }
`

export const ImageMovie = styled.img`
  width: 100%;
  object-fit: contain;
`

export const VoteContainer = styled.div`
  position: absolute;
  left: -5px;
  top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 64px;
  border: 2px solid ${props => props.inputColor || '#0E3FA9'};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`

export const ImageStar = styled.img`
  margin-right: 8px;
`

export const VoteAverage = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--white);
`