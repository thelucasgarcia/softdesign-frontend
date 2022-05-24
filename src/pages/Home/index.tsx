import React from 'react';
import CardsContainer from '../../containers/CardsContainer';
import { useComics } from '../../hooks/context';

import { Container, Title } from './styles';

const Home: React.FC = () => {
  const { comics, fetchComics } = useComics();
  console.log(comics)
  return (
    <React.Fragment>
      <Container>
        <Title> Pesquise seus quadrinhos </Title>
        
        <form action="">
          <label htmlFor="search"></label>
          <input type="text" id="search" name="search" placeholder='Pesquisar quadrinhos' />
        </form>

      </Container>

      <CardsContainer />
     
    </React.Fragment>
  );
}

export default Home;