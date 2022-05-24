import React from 'react';
import { ComicProvider } from './contexts/comics';
import Navigation from './routes/navigation';
import GlobalStyle from './styles/global';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ComicProvider>
        <Navigation />
        <GlobalStyle />
      </ComicProvider>
    </React.Fragment>
  )
}
    
export default App;