import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/core';
import { SHOT_TYPE, POINTS_TYPE } from '../constants/base';

function FieldGoal({ shotPositions }) {
  const shotMades = shotPositions.filter(shot => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.length;
  const threeMades = shotPositions.filter(
    shot => (shot.type === SHOT_TYPE.MADE) && (shot.points === POINTS_TYPE.THREE)
  ).length;
  const threeTakes = shotPositions.filter(
    shot => shot.points === POINTS_TYPE.THREE
  ).length;

  return (
    <Box position="absolute">
      <Text>{`FG: ${shotMades} - ${shotTakes}`}</Text>
      <Text>{`3PTS: ${threeMades} - ${threeTakes}`}</Text>
    </Box>
  );
}

FieldGoal.propTypes = {
  shotPositions: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })).isRequired,
}

export default FieldGoal;
