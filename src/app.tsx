import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import theme from "./config/theme";
import { ComicProvider } from "./contexts/comics";
import { FavoriteProvider } from "./contexts/favorites";
import Navigation from "./routes/navigation";
import GlobalStyle from "./styles/global";
import "sweetalert2/dist/sweetalert2.css";
import app from "../package.json";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HashRouter basename={process.env.NODE_ENV === "production" ? app.homepage : "/"}>
        <ThemeProvider theme={theme}>
          <ComicProvider>
            <FavoriteProvider>
              <Navigation />
              <GlobalStyle />
            </FavoriteProvider>
          </ComicProvider>
        </ThemeProvider>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;