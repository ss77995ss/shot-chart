import React from 'react';
import { Flex, IconButton } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';
import CourtTab from './CourtTab';

const renderTabs = (courtPositions) =>
  Object.values(courtPositions).map((court) => (
    <CourtTab key={`court-tab-#${court.id}`} id={`${court.id}`} name={`${court.name}`} />
  ));

function CourtTabs() {
  const { newCourtId } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositions = useCourtPositionsState();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleAddCourt = () => {
    courtPositionsDispatch({ type: 'ADD_COURT', id: newCourtId });
    courtDispatch({ type: 'ADD_COURT' });
  };

  return (
    <Flex h="40px">
      {renderTabs(courtPositions)}
      <IconButton
        icon="add"
        variant="ghost"
        _hover={{ bg: 'blue.700' }}
        size="sm"
        isRound
        onClick={handleAddCourt}
        my="auto"
        ml={2}
      />
    </Flex>
  );
}

export default CourtTabs;
