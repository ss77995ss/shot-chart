import React, { useState } from 'react';
import { Box,  CSSReset, theme, ThemeProvider, Flex } from '@chakra-ui/core';
import { CourtProvider } from './contexts/court';
import { CourtPositionsProvider } from './contexts/courtPositions';
import ShotChart from './components/ShotsChart';
import ShotTypeSelector from './components/ShotTypeSelector';
import CourtSwitcher from './components/CourtSwitcher';
import { SHOT_TYPE } from './constants/base';
import './App.css';

function App() {
  const [shotType, setShotType] = useState(SHOT_TYPE.MADE);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    event.preventDefault();
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  };

  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    setShotType(event.target.value);
  };

  return (
    <CourtProvider>
    <CourtPositionsProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <div className="App">
          <Flex h="100vh" align="center" justify="center" bg="#282c34" color="white" textAlign="center">
            <Box p={4}>
              <ShotTypeSelector onClick={handleSwitchShotType} />
              <ShotChart
                shotType={shotType}
                position={position}
                onMouseMove={handleMouseMove}
              />
            </Box>
            <Box>
              <CourtSwitcher />
            </Box>
          </Flex>
        </div>
      </ThemeProvider>
    </CourtPositionsProvider>
    </CourtProvider>
  );
}

export default App;
