import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core';
import EditChart from './EditChart';
import ShotTypeSelector from './ShotTypeSelector';
import ModeTypeSelector from './ModeTypeSelector';
import { SHOT_TYPE } from '../../constants/base';

function EditMode() {
  const [mode, setMode] = React.useState('insert');
  const [shotType, setShotType] = React.useState(SHOT_TYPE.MADE);

  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    setMode('insert');
    setShotType(event.target.value);
  };

  const handleSwitchModeType = event => {
    console.log(`Change mode type! ${event.target.value}`);
    setMode(event.target.value);
  }

  return (
    <Flex>
      <EditChart
        mode={mode}
        shotType={shotType}
      />
      <Box mx="auto" mt="40px" w={300}>
        <Text mb="16px">{`Current Mode: ${mode}`}</Text>
        <ShotTypeSelector onClick={handleSwitchShotType} />
        <ModeTypeSelector onClick={handleSwitchModeType} />
      </Box>
    </Flex>
  );
}

export default EditMode;
