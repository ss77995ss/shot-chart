import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/core';
import { SHOT_TYPE, POINTS_TYPE } from '../constants/base';

function FieldGoal({ shotPositions }) {
  const shotMades = shotPositions.filter(shot => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.length;
  const shootingPercentage = shotTakes !== 0 ? (shotMades * 100) / shotTakes : 0;
  const threeMades = shotPositions.filter(
    shot => (shot.type === SHOT_TYPE.MADE) && (shot.points === POINTS_TYPE.THREE)
  ).length;
  const threeTakes = shotPositions.filter(
    shot => shot.points === POINTS_TYPE.THREE
  ).length;
  const threePointPercentage = threeTakes !== 0 ? (threeMades * 100) / threeTakes : 0;

  return (
    <Box position="absolute" p={8} right={0} bottom={0} color="black">
      <Text fontFamily="charlemagne-std">{`FG: ${shotMades} - ${shotTakes}`}</Text>
      <Text fontFamily="charlemagne-std">{`${shootingPercentage.toFixed(2)} %`}</Text>
      <Text fontFamily="charlemagne-std">{`3PT: ${threeMades} - ${threeTakes}`}</Text>
      <Text fontFamily="charlemagne-std">{`${threePointPercentage.toFixed(2)} %`}</Text>
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
