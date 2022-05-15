import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Heading, Text } from '@chakra-ui/core';
import { update } from 'ramda';
import { SAVE_DATA_VERSION } from '../../constants/base';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';

function SaveSlot({ savedData, slot, index, action, onClose, ...rest }) {
  const { t } = useTranslation();
  const [isHover, setIsHover] = React.useState(false);
  const court = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositions = useCourtPositionsState();
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const targetData = { court, courtPositions, version: SAVE_DATA_VERSION, date: new Date() };

  const handleSave = () => {
    const savedName = prompt(t('enterSaveFileName'), slot.savedName || '');
    const newData = update(index, { savedName, ...targetData }, savedData);
    localStorage.setItem('shotChartData', JSON.stringify(newData));
    onClose();
  };

  const handleLoad = () => {
    if (!slot.date) {
      alert(t('emptySaveSlot'));
      return onClose();
    }
    courtDispatch({ type: 'LOAD_COURT', court: slot.court });
    courtPositionsDispatch({ type: 'LOAD_COURT_POSITIONS', courtPositions: slot.courtPositions });
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
      onClick={action === 'save' ? handleSave : handleLoad}
    >
      <Heading fontSize="md">{`SaveSlot - ${index + 1}: `}</Heading>
      <Text overflow="hidden" textOverflow="ellipsis">
        {slot.savedName}
      </Text>
      <Text>{slot.date}</Text>
    </Box>
  );
}

export default SaveSlot;
