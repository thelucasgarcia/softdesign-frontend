import React from "react";
import { useComics } from "../../hooks/context";
import { Container, MarvelLogo, Title, Wrapper } from "./styles";
import SearchInput from "../../components/SearchInput";

const HeroContainer: React.FC = () => {
  const { changeTerm } = useComics();

  return (
      <Wrapper>
        <Container>
          <MarvelLogo />
          <Title>Pesquise suas histórias em quadrinhos da Marvel</Title>
          <SearchInput callback={data => changeTerm(data.term)} />
        </Container>
      </Wrapper>
  );
};

export default HeroContainer;