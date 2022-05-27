import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../config/theme";

import { Container } from "./styles";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonInterface> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container {...props}>
        {props.children}
      </Container>
    </ThemeProvider>
  );
};

export default Button;