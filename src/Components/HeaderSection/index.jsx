import React from "react";
import Logo from '../../static/icons/logo-blockBuster.svg'
import IconSearch from '../../static/icons/icon-search.svg'
import {Header, UnorderedList, Form, Input, Button} from './styles'

const HeaderSection = () => {
  return (
    <Header>
      <img src={Logo} alt="Logo" />
      <nav>
        <UnorderedList>
          <li>Todas</li>
          <li>Más Valoradas</li>
          <li>Menos Valoradas</li>
        </UnorderedList>
      </nav>
      <Form action="">
        <Input type="text" placeholder="Busca tu película favorita" />
        <Button><img src={IconSearch} alt="IconSearch" /></Button>
      </Form>
    </Header>
  )
}

export {HeaderSection}