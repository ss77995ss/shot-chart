import React from 'react';
import { CSSReset, theme, ThemeProvider, Box, Button, Flex } from '@chakra-ui/core';
import { CourtProvider } from './contexts/court';
import { CourtPositionsProvider } from './contexts/courtPositions';
import EditMode from './components/EditMode';
import ViewMode from './components/ViewMode';
import './App.css';

function App() {
  const [mode, setMode] = React.useState('EDIT');
  const handleSwitchMode = event => {
    setMode(event.target.value);
  };

  return (
    <CourtProvider>
    <CourtPositionsProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <div className="App">
          <Flex h="100vh" align="center" justify="center" bg="#282c34" color="white" textAlign="center">
            <Box>
              <Button value="EDIT" onClick={handleSwitchMode}>EDIT</Button>
              <Button value="VIEW" onClick={handleSwitchMode}>VIEW</Button>
            </Box>
            { mode === 'EDIT' ? <EditMode /> : <ViewMode /> }
          </Flex>
        </div>
      </ThemeProvider>
    </CourtPositionsProvider>
    </CourtProvider>
  );
}

export default App;
