import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import ViewChart from './ViewChart';
import CourtSwitcher from './CourtSwitcher';

function ViewMode() {
  return (
    <Flex>
      <ViewChart />
      <Box mx="auto" mt="40px" w={300}>
        <Heading as="h3" mb={4}>分佈圖:</Heading>
        <CourtSwitcher />
      </Box>
    </Flex>
  );
}

export default ViewMode;
