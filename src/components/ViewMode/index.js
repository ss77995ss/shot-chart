import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import ViewChart from './ViewChart';
import CourtSwitcher from './CourtSwitcher';

function ViewMode() {
  return (
    <Flex align="center">
      <ViewChart />
      <Box>
        <CourtSwitcher />
      </Box>
    </Flex>
  );
}

export default ViewMode;
