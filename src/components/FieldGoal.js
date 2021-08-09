import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Flex } from '@chakra-ui/core';
import { SHOT_TYPE, POINTS_TYPE } from '../constants/base';

function FieldGoal({ shotPositions }) {
  const shotMades = shotPositions.filter((shot) => shot.type === SHOT_TYPE.MADE).length;
  const shotTakes = shotPositions.filter((shot) => shot.type === SHOT_TYPE.MADE || shot.type === SHOT_TYPE.MISS).length;
  const shootingPercentage = shotTakes !== 0 ? (shotMades * 100) / shotTakes : 0;
  const threeMades = shotPositions.filter((shot) => shot.type === SHOT_TYPE.MADE && shot.points === POINTS_TYPE.THREE)
    .length;
  const threeTakes = shotPositions.filter(
    (shot) => (shot.type === SHOT_TYPE.MADE || shot.type === SHOT_TYPE.MISS) && shot.points === POINTS_TYPE.THREE,
  ).length;
  const threePointPercentage = threeTakes !== 0 ? (threeMades * 100) / threeTakes : 0;
  const fouls = shotPositions.filter((shot) => shot.type === 'F').length;
  const turnovers = shotPositions.filter((shot) => shot.type === 'T').length;

  return (
    <Flex alignItems="flex-end">
      <Box color="black" mr={2}>
        <Text fontFamily="charlemagne-std">{`Fouls: ${fouls}`}</Text>
        <Text fontFamily="charlemagne-std">{`TO: ${turnovers}`}</Text>
      </Box>
      <Box color="black" textAlign="right">
        <Text fontFamily="charlemagne-std">{`FG: ${shotMades} - ${shotTakes}`}</Text>
        <Text fontFamily="charlemagne-std">{`${shootingPercentage.toFixed(1)} %`}</Text>
        <Text fontFamily="charlemagne-std">{`3PT: ${threeMades} - ${threeTakes}`}</Text>
        <Text fontFamily="charlemagne-std">{`${threePointPercentage.toFixed(1)} %`}</Text>
      </Box>
    </Flex>
  );
}

FieldGoal.propTypes = {
  shotPositions: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default FieldGoal;
