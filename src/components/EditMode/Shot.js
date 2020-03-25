import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../contexts/court';
import { useCourtPositionsDispatch } from '../contexts/courtPositions';

function Shot({ position }) {
  const { currentCourt, selectedPosition } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const isSelected = JSON.stringify(selectedPosition) === JSON.stringify(position);
  const style = {
    backgroundColor:  isSelected ? 'blue' : null,
  };

  const handleClick = () => {
    courtDispatch({
      type: 'SELECT_POSITION',
      position,
    });
  };

  const handleDelete = () => {
    courtPositionsDispatch({
      type: 'DELETE_POSITION',
      currentCourt,
      selectedPosition: position,
    });
    courtDispatch({
      type: 'SELECT_POSITION',
      position: null,
    });
  }

  return (
    <li >
      <span style={style} onClick={handleClick}>
        {`X: ${position.x}, Y: ${position.y}`}
      </span>
      <Button bg="blue" size="small" ml={4} onClick={handleDelete}>Delete</Button>
    </li>
  );
}

Shot.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
}

export default Shot
