import React from 'react';
import { Stack } from '@chakra-ui/core';
import SaveSlot from './SaveSlot';

function SaveSlots({ action, onClose }) {
  const savedData = JSON.parse(localStorage.getItem('shotChartData')) || Array(5).fill({ savedName: '', date: '' });
  console.log(savedData);

  return (
    <Stack spacing={2}>
      {savedData.map((slot, index) => <SaveSlot key={`slot-${index}`} savedData={savedData} slot={slot} index={index} action={action} onClose={onClose} />)}
    </Stack>
  )
}

export default SaveSlots;
