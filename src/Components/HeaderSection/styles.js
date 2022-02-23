import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 370px;
  list-style: none;
  font-size: 1.6rem;
  color: var(--white);
  & li {
    cursor: pointer;
    &:hover {
      color: var(--yellow-primary);
      text-decoration: underline;
    }
  }
`

export const Form = styled.form`
  position: relative;
  width: 534px;
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid var(--yellow-primary);
  border-radius: 5px;
  outline: none;
  padding: 0 12px;
  &::placeholder{
    font-size: 1.6rem;
    color: var(--grey);
  }
`

export const Button = styled.button`
  position: absolute;
  right: 0;
  width: 72px;
  height: 45px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--yellow-primary);
  cursor: pointer;
`