import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <div>

      <h1>404 PÁGINA NÃO ENCONTRADA </h1>
      <h2>Nem o Olho do Uatu vê sua solicitação...</h2>
      <br /><br />
      <p>
        Verifique se digitou o endereço corretamente ou volte para sua página anterior
      </p> 
      <Link to={'/'}>
        <FaArrowLeft/> Voltar para home
      </Link>
      </div>
    </Container>
  )
}

export default NotFound;