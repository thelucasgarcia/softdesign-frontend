import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return <div>
    <h1>NotFound</h1>
      
    <Link to={'/'}>
      Voltar para home
    </Link>
  </div> 
}

export default NotFound;