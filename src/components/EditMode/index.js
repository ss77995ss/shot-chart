import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Flex, Text } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';
import { shotTypes, MODE_TYPE } from '../../constants/base';
import EditChart from './EditChart';
import CourtNameForm from './CourtNameForm';
import PlayerInfoModal from './PlayerInfoModal';
import ShotTypeSelector from './ShotTypeSelector';
import ModeTypeSelector from './ModeTypeSelector';
import SaveDataModal from './SaveDataModal';
import LoadDataModal from './LoadDataModal';

function EditMode() {
  const { t } = useTranslation();
  const [mode, setMode] = React.useState(MODE_TYPE.INSERT);
  const [shotType, setShotType] = React.useState(shotTypes['o'].value);
  const { currentCourt } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositions = useCourtPositionsState();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleSwitchShotType = (event) => {
    console.log(`Change shot type! ${event.target.value}`);
    if (!event.target.value) return alert('Undefined!');
    setShotType(event.target.value);
    setMode(MODE_TYPE.INSERT);
  };

  const handleSwitchModeType = (event) => {
    console.log(`Change mode type! ${event.target.value}`);
    setMode(event.target.value);
  };

  const handleUndo = () => {
    const target = courtPositions[currentCourt].value;

    if (target.length < 1) return alert('No shots left!');

    courtPositionsDispatch({
      type: 'DELETE_SHOT',
      currentCourt,
      selectedPoistionIndex: target.length - 1,
    });
  };

  const handleReset = () => {
    courtDispatch({
      type: 'RESET',
    });
    courtPositionsDispatch({
      type: 'RESET',
    });
  };

  return (
    <Flex>
      <EditChart mode={mode} shotType={shotType} />
      <Box mx="auto" mt="40px" w={300}>
        <PlayerInfoModal />
        <Text my="16px">{`${t('currentMode')} ${t(mode)}`}</Text>
        <ShotTypeSelector onClick={handleSwitchShotType} />
        <ModeTypeSelector onClick={handleSwitchModeType} />
        <CourtNameForm key={`court-name-form-${currentCourt}`} id={currentCourt} />
        <Button mt={4} mr={2} variantColor="blue" onClick={handleUndo}>
          {t('previousStep')}
        </Button>
        <Button mt={4} mr={2} variantColor="blue" onClick={handleReset}>
          {t('reset')}
        </Button>
        <Box>
          <SaveDataModal />
          <LoadDataModal />
        </Box>
      </Box>
    </Flex>
  );
}

export default EditMode;
