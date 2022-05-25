import React from 'react';

import { Container } from './styles';

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
} ;

const Button: React.FC<ButtonInterface> = (props) => {
  return <Container {...props}>
      {props.children}
  </Container>;
}

export default Button;