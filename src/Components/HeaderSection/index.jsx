import React from "react";
import Logo from '../../static/icons/logo-blockBuster.svg'
import IconSearch from '../../static/icons/icon-search.svg'
import {Header, UnorderedList, Form, Input, Button} from './styles'

const HeaderSection = ({allmovies, mostValue, lessValue, handleSearch, search}) => {

  const handleAllMovies = () => {
    allmovies()
  }

  const handleMostValue = () =>{
    mostValue()
  }

  const handleLessValue = () => {
    lessValue()
  }

  return (
    <Header>
      <img src={Logo} alt="Logo" />
      <nav>
        <UnorderedList>
          <li onClick={handleAllMovies}>Todas</li>
          <li onClick={handleMostValue}>Más Valoradas</li>
          <li onClick={handleLessValue}>Menos Valoradas</li>
        </UnorderedList>
      </nav>
      <Form action="">
        <Input type="text" placeholder="Busca tu película favorita" value={search} onChange={(event)=> handleSearch(event)} />
        <Button><img src={IconSearch} alt="IconSearch" /></Button>
      </Form>
    </Header>
  )
}

export {HeaderSection}