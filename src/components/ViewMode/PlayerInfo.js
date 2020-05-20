import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from '@chakra-ui/core';
import { useCourtState } from '../../hooks/court';
import FieldGoal from '../FieldGoal';

function PlayerInfo({ shotPositions }) {
  const { playerInfo } = useCourtState();
  const { team, name, number, position, hand, gameCounts } = playerInfo;
  return (
    <>
      <Text p={8} fontFamily="Heiti">{team}</Text>
      <Text py={8} position="absolute" left={250 - name.length * 10} fontFamily="Heiti">{name}</Text>
      <Text p={8} fontFamily="charlemagne-std">{`#${number} ${position}`}</Text>
      <Flex w={500} p={8} position="absolute" left="0" bottom="0" justifyContent="space-between" alignItems="flex-end">
        <Box  textAlign="center">
          {
            hand &&
             <>
              <Text fontFamily="Heiti">慣用手</Text>
              <Text fontFamily="Heiti">{hand}</Text>
             </>
          }
        </Box>
        <Box position="absolute" left={250 - (gameCounts.length + 6) / 2 * 10}>
          <Text fontFamily="Heiti">{`場數：${gameCounts}`}</Text>
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
