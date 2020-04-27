import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { useCourtState } from '../../hooks/court';
import { useCourtPositionsState } from '../../hooks/courtPositions';
import PlayerInfo from './PlayerInfo';
import FieldGoal from '../FieldGoal';
import ShotPositions from '../ShotPositions';

function ViewChart() {
  const { selectedCourts } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const currentShotPositions = selectedCourts
    .map(court => courtPositions[court].value)
    .flat();

  return (
    <Box mt="40px" ml="auto" className="App-logo-wrapper" color="black">
      <Flex justifyContent="space-between" fontSize={20}>
        <PlayerInfo />
        <ShotPositions mode="view" shotPositions={currentShotPositions} />
      </Flex>
      <FieldGoal shotPositions={currentShotPositions} />
    </Box>
  );
}

export default ViewChart;
