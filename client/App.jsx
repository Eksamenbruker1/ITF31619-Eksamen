import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';


const App = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Routes />
  </ThemeProvider>
);

export default App;
