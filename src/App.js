import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const SHOT_TYPE = {
  MADE: 'O',
  MISS: 'X',
}

function ShotTypeSelector({ onClick }) {
  return (
    <div>
      <button value={SHOT_TYPE.MADE} onClick={onClick}>MADE</button>
      <button value={SHOT_TYPE.MISS} onClick={onClick}>MISS</button>
    </div>
  )
}

function ShotPositions({ data }) {
  return (
    data.map((shot, index) => {
      const style = {
        position: 'absolute',
        left: shot.position.x,
        top: shot.position.y,
      };
      return <span key={index} style={style}>{shot.type}</span>
    })
  );
}

function App() {
  const [shotType, setShotType] = useState(SHOT_TYPE.MADE);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shotPositions, setShotPositions] = useState([]);

  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    setShotType(event.target.value);
  }

  const handlePositionClick = () => {
    console.log('Set Position!');
    setShotPositions(prevState => prevState.concat({
      type: shotType,
      position,
    }));
  }

  const handleMouseMove = event => {
    event.preventDefault();
    setPosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  }
  return (
    <div className="App">
      <ShotTypeSelector onClick={handleSwitchShotType} />
      <header className="App-header">
        <div className="App-logo-wrapper" onClick={handlePositionClick}>
          <ShotPositions data={shotPositions} />
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onMouseMove={handleMouseMove}
          />
          <span style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
          }}>{shotType}</span>
        </div>
        <p>{`X: ${position.x} Y: ${position.y}`}</p>
      </header>
    </div>
  );
}

export default App;
