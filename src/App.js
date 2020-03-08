import React, { useState } from 'react';
import './App.css';

const SHOT_TYPE = {
  MADE: 'o',
  MISS: 'x',
  UNDO: 'undo',
}

function ShotTypeSelector({ onClick }) {
  return (
    <div>
      <button value={SHOT_TYPE.MADE} onClick={onClick}>MADE</button>
      <button value={SHOT_TYPE.MISS} onClick={onClick}>MISS</button>
      <button value={SHOT_TYPE.UNDO} onClick={onClick}>UNDO</button>
    </div>
  )
}

function ShotPositions({ data }) {
  return (
    data.map((shot, index) => {
      const style = {
        color: shot.type === SHOT_TYPE.MADE ? 'red' : 'blue',
        fontSize: '20px',
        position: 'absolute',
        left: shot.position.x - 8,
        top: shot.position.y - 16,
        pointerEvents: 'none',
        zIndex: index,
      };
      return <span key={index} style={style}>{shot.type}</span>
    })
  );
}

const renderFieldGoal = shotPositions => {
  console.log(shotPositions)
  const shotMades = shotPositions.filter(shot => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.length;
  return (
    <p>{`FG: ${shotMades} - ${shotTakes}`}</p>
  )
}

function App() {
  const [shotType, setShotType] = useState(SHOT_TYPE.MADE);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [court, setCourt] = useState(1);
  const [shotPositions, setShotPositions] = useState([]);
  const [courtPositions, setCourtPositions] = useState({
    1: [],
    2: [],
  });


  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    if (event.target.value === SHOT_TYPE.UNDO) setShotPositions(prevState => prevState.slice(0, - 1));
    else setShotType(event.target.value);
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

  React.useEffect(() => {
    setCourtPositions(prevState => {
      return {
        ...prevState,
        [court]: shotPositions,
      }
    })
  }, [court, shotPositions, setCourtPositions]);

  return (
    <div className="App">
      <header className="App-header">
        <ShotTypeSelector onClick={handleSwitchShotType} />
        <div className="App-logo-wrapper" onClick={handlePositionClick} onMouseMove={handleMouseMove}>
          {renderFieldGoal(shotPositions)}
          <ShotPositions data={shotPositions} />
          <span style={{
            color: shotType === SHOT_TYPE.MADE ? 'red' : 'blue',
            fontSize: '20px',
            position: 'absolute',
            left: position.x - 8,
            top: position.y - 16,
            pointerEvents: 'none',
            zIndex: 100000,
          }}>{shotType}</span>
        </div>
        <p>{`X: ${position.x} Y: ${position.y}`}</p>
        <button value={1} onClick={handleChangeCourt}>1</button>
        <button value={2} onClick={handleChangeCourt}>2</button>
        <button value="total" onClick={handleChangeCourt}>total</button>
      </header>
    </div>
  );
}

export default App;
