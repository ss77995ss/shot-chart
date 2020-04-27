import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import { useCourtState } from '../../hooks/court';

function PlayerInfo() {
  const { playerInfo } = useCourtState();
  const { team, name, number, position, hand } = playerInfo;
  return (
    <>
      <Text p={8} fontFamily="Heiti">{team}</Text>
      <Text py={8} fontFamily="Heiti">{name}</Text>
      <Text p={8} fontFamily="charlemagne-std">{`#${number} ${position}`}</Text>
      <Box p={8} position="absolute" left="0" bottom="0" textAlign="center">
        <Text fontFamily="Heiti">慣用手</Text>
        <Text fontFamily="Heiti">{hand}</Text>
      </Box>
    </>
  )
}

export default PlayerInfo;
