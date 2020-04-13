import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
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
    <Flex align="center">
      <EditChart
        mode={mode}
        shotType={shotType}
      />
      <ShotTypeSelector onClick={handleSwitchShotType} />
      <ModeTypeSelector onClick={handleSwitchModeType} />
      <Text>{`Current Mode: ${mode}`}</Text>
    </Flex>
  );
}

export default EditMode;
