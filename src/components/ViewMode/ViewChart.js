import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { useCourtState } from '../../hooks/court';
import { useCourtPositionsState } from '../../hooks/courtPositions';
import PlayerInfo from './PlayerInfo';
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
        <PlayerInfo shotPositions={currentShotPositions} />
        <ShotPositions mode="view" shotPositions={currentShotPositions} />
      </Flex>
    </Box>
  );
}

export default ViewChart;
