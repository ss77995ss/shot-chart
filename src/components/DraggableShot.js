import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import { useCourtPositionsDispatch } from '../hooks/courtPositions';
import { SHOT_TYPE } from '../constants/base';

function DraggableShot({ currentCourt, index, shot }) {
  const { type, position } = shot;
  const [ activeDrag, setActiveDrag ] = React.useState(false);
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const className = !activeDrag ? 'dragged' : ''
  const style = {
    color: shot.type === SHOT_TYPE.MADE ? 'red' : 'blue',
    fontSize: '20px',
    position: 'absolute',
    zIndex: index,
  };

  const handleStart = () => setActiveDrag(true);
  const handleStop = (e, ui) => {
    courtPositionsDispatch({
      type: 'UPDATE_SHOT',
      currentCourt,
      selectedPoistionIndex: index,
      newShot: {
        type,
        position: {
          x: ui.x + 8,
          y: ui.y + 40,
        }
      },
    })
    setActiveDrag(false);
  }

  return (
    <Draggable position={{ x: position.x - 8, y: position.y - 40 }} bounds="parent" onStart={handleStart} onStop={handleStop}>
      <span className={className} style={style}>{type}</span>
    </Draggable>
  )
}

DraggableShot.propTypes = {
  currentCourt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  shot: PropTypes.shape({
    type: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
}

export default DraggableShot
