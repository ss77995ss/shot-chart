import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import ViewChart from './ViewChart';
import CourtSwitcher from './CourtSwitcher';

function ViewMode() {
  return (
    <Flex>
      <ViewChart />
      <Box mx="auto" mt="40px" w={300}>
        <CourtSwitcher />
      </Box>
    </Flex>
  );
}

export default ViewMode;
