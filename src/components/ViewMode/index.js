import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Flex, Heading } from '@chakra-ui/core';
import ViewChart from './ViewChart';
import CourtSwitcher from './CourtSwitcher';

function ViewMode() {
  const { t } = useTranslation();

  return (
    <Flex>
      <ViewChart />
      <Box mx="auto" mt="40px" w={300}>
        <Heading as="h3" mb={4}>
          {t('shotChart')}
        </Heading>
        <CourtSwitcher />
      </Box>
    </Flex>
  );
}

export default ViewMode;
