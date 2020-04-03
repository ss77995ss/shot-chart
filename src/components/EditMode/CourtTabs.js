import React from 'react';
import { TabList, Tab } from '@chakra-ui/core';
import { useCourtPositionsState } from '../../hooks/courtPositions';

const renderTabs = courtPositions => (
  Object.values(courtPositions).map(court => (
    <Tab>{court.name}</Tab>
  ))
)

function CourtTabs() {
  const courtPositions = useCourtPositionsState();

  return (
    <TabList>
      {renderTabs(courtPositions)}
    </TabList>
  )
}

export default CourtTabs
