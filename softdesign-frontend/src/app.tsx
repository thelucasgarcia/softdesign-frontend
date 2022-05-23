import React from 'react';
import Navigation from './routes/navigation';
import GlobalStyle from './styles/global';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <GlobalStyle />
    </React.Fragment>
  )
}
    
export default App;