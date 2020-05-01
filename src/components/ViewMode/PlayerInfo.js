import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from '@chakra-ui/core';
import { useCourtState } from '../../hooks/court';
import FieldGoal from '../FieldGoal';

function PlayerInfo({ shotPositions }) {
  const { playerInfo } = useCourtState();
  const { team, name, number, position, hand, games } = playerInfo;
  return (
    <>
      <Text p={8} fontFamily="Heiti">{team}</Text>
      <Text py={8} fontFamily="Heiti">{name}</Text>
      <Text p={8} fontFamily="charlemagne-std">{`#${number} ${position}`}</Text>
      <Flex w={500} p={8} position="absolute" left="0" bottom="0" justifyContent="space-between">
        <Box  textAlign="center">
          <Text fontFamily="Heiti">慣用手</Text>
          <Text fontFamily="Heiti">{hand}</Text>
        </Box>
        <Box>
          <Text fontFamily="Heiti">{games}</Text>
        </Box>
        <FieldGoal shotPositions={shotPositions} />
      </Flex>
    </>
  )
}

PlayerInfo.propTypes = {
  shotPositions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  })).isRequired,
}

export default PlayerInfo;
