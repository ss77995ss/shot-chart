import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/core';
import { useCourtState } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';
import EditChart from './EditChart';
import CourtNameForm from './CourtNameForm';
import PlayerInfoForm from './PlayerInfoForm';
import ShotTypeSelector from './ShotTypeSelector';
import ModeTypeSelector from './ModeTypeSelector';
import { SHOT_TYPE, MODE_TYPE } from '../../constants/base';

function EditMode() {
  const [mode, setMode] = React.useState(MODE_TYPE.INSERT);
  const [shotType, setShotType] = React.useState(SHOT_TYPE.MADE);
  const { currentCourt } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleSwitchShotType = event => {
    console.log(`Change shot type! ${event.target.value}`);
    setMode(MODE_TYPE.INSERT);
    setShotType(event.target.value);
  };

  const handleSwitchModeType = event => {
    console.log(`Change mode type! ${event.target.value}`);
    setMode(event.target.value);
  }

  const handleUndo = () => {
    const target = courtPositions[currentCourt].value;

    if (target.length < 1) return alert('No shots left!');

    courtPositionsDispatch({
      type: 'DELETE_SHOT',
      currentCourt,
      selectedPoistionIndex: target.length - 1,
    });
  }

  return (
    <Flex>
      <EditChart
        mode={mode}
        shotType={shotType}
      />
      <Box mx="auto" mt="40px" w={300}>
        <PlayerInfoForm />
        <Text my="16px">{`現在的編輯模式: ${mode}`}</Text>
        <ShotTypeSelector onClick={handleSwitchShotType} />
        <ModeTypeSelector onClick={handleSwitchModeType} />
        <CourtNameForm key={`court-name-form-${currentCourt}`} id={currentCourt} />
        <Button mt={4} variantColor="blue" onClick={handleUndo}>上一步</Button>
      </Box>
    </Flex>
  );
}

export default EditMode;
