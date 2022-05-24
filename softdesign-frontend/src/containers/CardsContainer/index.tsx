import Pagination from 'rc-pagination';
import React from 'react';
import Card from '../../components/Card';
import { useComics } from '../../hooks/context';

import { Container } from './styles';

const CardsContainer: React.FC = () => {
  const { comics, fetchComics } = useComics();

  function changePage(current: any, pageSize: any) {
    console.log(current, pageSize)
    fetchComics({ offset: (current - 1 || 0) * pageSize, limit: pageSize })
  }

  if (!comics?.data.total) return null;

  return (
    <React.Fragment>
      <Container>
        {comics?.data.results.map((result) => (
          <Card
            key={result.id.toString()}
            id={result.id}
            title={result.title}
            thumbnail={result.thumbnail.path + '.' + result.thumbnail.extension}
            caption={result.description}
            date={new Date(result.dates[0].date).getFullYear()}
          />
        ))}
      </Container>
      <Pagination
        showTotal={total => `Total ${total} items`}
        total={comics?.data.total}
        defaultPageSize={20}
        onChange={changePage}
      />

    </React.Fragment>
  );
}

export default CardsContainer;