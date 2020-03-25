import React from 'react';
import { Box } from '@chakra-ui/core';
import { useCourtState } from '../../contexts/court';
import { useCourtPositionsState } from '../../contexts/courtPositions';
import FieldGoal from '../FieldGoal';
import ShotPositions from '../ShotPositions';

function ViewChart() {
  const { selectedCourts } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const currentShotPositions = selectedCourts
    .map(court => courtPositions[court].value)
    .flat();

  return (
    <Box className="App-logo-wrapper">
      <FieldGoal shotPositions={currentShotPositions} />
      <ShotPositions shotPositions={currentShotPositions} />
    </Box>
  );
}

export default ViewChart;
