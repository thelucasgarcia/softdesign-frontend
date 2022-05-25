import React from 'react';
import ComicsContainer from '../../containers/ComicsContainer';
import HeroContainer from '../../containers/HeroContainer';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HeroContainer />
      <ComicsContainer />
    </React.Fragment>
  );
}

export default Home;