/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Favorites from "../../components/Favorites";
import Paginate from "../../components/Paginate";
import { useComics, useFavorites } from "../../hooks/context";
import useScrollTo from "../../hooks/useScrollTo";

import { Box, Container, NotFoundText, Title, Wrapper } from "./styles";

const ComicsContainer: React.FC = () => {
  const { comics, fetchComics, term } = useComics();
  const { favorites } = useFavorites();
  const { scrollToSearchBar } = useScrollTo();

  function changePage(current: number, pageSize: number) {
    fetchComics({ offset: (current - 1 || 0) * pageSize, limit: pageSize, title: term });
  }

  if (!comics) return null;

  if (!comics?.data.total) {
    return (
      <Wrapper style={{ display: "flex", placeContent: "center", placeItems: "center", flexDirection: "column" }}>
        <NotFoundText>Não foi encontrado dados para: <br /> "{term}"</NotFoundText>
        <Button onClick={() => scrollToSearchBar()}>Pesquisar novamente</Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>

      <Box flex={favorites.length ? 1 : 0}>
        <Favorites />
      </Box>

      <Box flex={3}>
        <Title>{comics.data.total} Resultados: {term}</Title>
        <Container>
          {comics?.data.results.map((result) => (
            <Card
              key={result.id.toString()}
              active={favorites.some(x => x.id === result.id)}
              id={result.id}
              title={result.title}
              thumbnail={result.thumbnail}
              description={result.description}
              date={new Date(result.dates[0].date).getFullYear().toString()}
            />
          ))}
        </Container>

        <Paginate
          total={comics?.data.total}
          defaultPageSize={8}
          onChange={changePage}
          style={{
            marginBottom: "50px"
          }}
        />
      </Box>
    </Wrapper>
  );
};

export default ComicsContainer;