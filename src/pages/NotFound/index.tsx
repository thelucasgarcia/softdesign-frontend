import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const NotFound: React.FC = () => {
  return <div>
    <h1>NotFound</h1>
    <Link to={'app'}>
      ir para app
    </Link>
  </div> 
}

export default NotFound;