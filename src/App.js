import React, { useState } from 'react';
import { Checkbox, CheckboxGroup, CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import ShotChart from './components/ShotsChart';
import ShotTypeSelector from './components/ShotTypeSelector';
import { SHOT_TYPE } from './constants/base';
import './App.css';

function App() {
  const [shotType, setShotType] = useState(SHOT_TYPE.MADE);
  const [shotPositions, setShotPositions] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [court, setCourt] = useState(1);
  const [courtPositions, setCourtPositions] = useState({
    1: [],
    2: [],
  });

  const handlePositionClick = () => {
    console.log('Set Position!');
    setShotPositions(prevState => prevState.concat({
      type: shotType,
      position,
    }));
  };

  const handleMouseMove = event => {
    event.preventDefault();
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  };

  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    if (event.target.value === SHOT_TYPE.UNDO) setShotPositions(prevState => prevState.slice(0, - 1));
    else setShotType(event.target.value);
  };

  const handleChangeCourt = event => {
    const value = event.target.value;
    if (value === 'total') {
      const totalPositions = Object.values(courtPositions).flat();
      setShotPositions(totalPositions);
      setCourt('total');
    }
    else {
      setCourt(value);
      setShotPositions(courtPositions[value])
    }
  }

  const handleCheckboxChange = event => {
    console.log(event);
  }

  React.useEffect(() => {
    setCourtPositions(prevState => {
      return {
        ...prevState,
        [court]: shotPositions,
      }
    })
  }, [court, shotPositions, setCourtPositions]);

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className="App">
        <header className="App-header">
          <ShotTypeSelector onClick={handleSwitchShotType} />
          <ShotChart
            shotType={shotType}
            position={position}
            shotPositions={shotPositions}
            onClick={handlePositionClick}
            onMouseMove={handleMouseMove}
          />
          <p>{`X: ${position.x} Y: ${position.y}`}</p>
          <CheckboxGroup
            isInline
            spacing={8}
            variantColor="blue"
            defaultValue={'1'}
            onChange={handleCheckboxChange}
          >
            <Checkbox value={'1'}>1</Checkbox>
            <Checkbox value={'2'}>2</Checkbox>
          </CheckboxGroup>
          <button value={1} onClick={handleChangeCourt}>1</button>
          <button value={2} onClick={handleChangeCourt}>2</button>
          <button value="total" onClick={handleChangeCourt}>total</button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
