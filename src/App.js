import React from 'react';
import { CSSReset, theme, ThemeProvider, Box, Button } from '@chakra-ui/core';
import { CourtProvider } from './hooks/court';
import { CourtPositionsProvider } from './hooks/courtPositions';
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
        <Box h={600} align="center" justify="center" bg="#282c34" color="white">
          <Box>
            <Button m={4} value="EDIT" onClick={handleSwitchMode} bg="blue">EDIT</Button>
            <Button m={4} value="VIEW" onClick={handleSwitchMode} bg="blue">VIEW</Button>
            { mode === 'EDIT' ? <EditMode /> : <ViewMode /> }
          </Box>
        </Box>
      </ThemeProvider>
    </CourtPositionsProvider>
    </CourtProvider>
  );
}

export default App;
