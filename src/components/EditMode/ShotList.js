import React from 'react';
import { Box } from '@chakra-ui/core';
import Shot from './Shot';
import { useCourtState } from '../../hooks/court';
import { useCourtPositionsState } from '../../hooks/courtPositions';

const renderShotList = (positions) => {
  return positions.map(({ position }, index) => {
    return <Shot key={`shot-list-${index}`} position={position} />;
  });
};

function ShotList() {
  const { currentCourt } = useCourtState();
  const courtPositions = useCourtPositionsState();
  return (
    <Box>
      <ul>{currentCourt && renderShotList(courtPositions[currentCourt].value)}</ul>
    </Box>
  );
}

export default ShotList;
