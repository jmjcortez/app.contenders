import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './js/routers';
import { defaultTheme } from './js/constants/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
