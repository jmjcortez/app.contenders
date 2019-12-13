import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Router from './js/routers';
import { defaultTheme } from './js/constants/theme';
import NavigationBar from './js/components/navigation-bar';

const StyledApp = styled.div`
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledApp className="App">
        <NavigationBar />
        <Router />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
