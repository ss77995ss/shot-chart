import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import { update } from 'ramda';
import { SAVE_DATA_VERSION } from '../../constants/base';
import { useCourtState } from '../../hooks/court';
import { useCourtPositionsState } from '../../hooks/courtPositions';

function SaveSlot({ savedData, slot, index, onClose, ...rest }) {
  const [isHover, setIsHover] = React.useState(false);
  const court = useCourtState();
  const courtPositions = useCourtPositionsState();
  const targetData = { court, courtPositions, version: SAVE_DATA_VERSION, date: new Date() };

  const handleSave = () => {
    const savedName = prompt('輸入存檔檔名：');
    const newData = update(index, { savedName, ...targetData }, savedData);
    localStorage.setItem('shotChartData', JSON.stringify(newData));
    onClose();
  };

  return (
    <Box
      p={3}
      bg={isHover ? '#CEEDFF' : '#fff'}
      shadow={isHover ? 'md' : null}
      borderWidth="1px"
      cursor="pointer"
      {...rest}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={handleSave}
    >
      <Heading fontSize="md">{`SaveSlot - ${index + 1}: `}</Heading>
      <Text overflow="hidden" textOverflow="ellipsis">{slot.savedName}</Text>
      <Text>{slot.date}</Text>
    </Box>
  );
}

export default SaveSlot;
