import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import EditChart from './EditChart';
import ShotTypeSelector from './ShotTypeSelector';
import { SHOT_TYPE } from '../../constants/base';

function EditMode() {
  const [shotType, setShotType] = React.useState(SHOT_TYPE.MADE);
  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    setShotType(event.target.value);
  };

  return (
    <Flex align="center">
      <EditChart
        shotType={shotType}
      />
      <Box>
        <ShotTypeSelector onClick={handleSwitchShotType} />
      </Box>
    </Flex>
  );
}

export default EditMode;
