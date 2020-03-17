import React from 'react';
import { Button, Checkbox, CheckboxGroup } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../contexts/court';
import { useCourtPositionsState, useCourtPositionsDispatch} from '../contexts/courtPositions';
import CourtCheckbox from './CourtCheckbox';

const renderCheckboxes = courtPositions => {
  return (
    Object.values(courtPositions).map((court, index) => (
      <Checkbox key={`checkbox-${court.id}`} value={court.id}>
        <CourtCheckbox id={court.id} name={court.name} />
      </Checkbox>
    ))
  )
};

function CourtSwitcher({ onChange }) {
  const { newCourtId, currentCourt, selectedCourts } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositions = useCourtPositionsState();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleCheckboxChange = checkedCourts => {
    courtDispatch({
      type: 'SELECT_COURTS',
      courts: checkedCourts,
    });
  };

  const handleAddCourtButtonClick = () => {
    courtPositionsDispatch({
      type: 'ADD_COURT',
      id: newCourtId.toString(),
      court: newCourtId.toString(),
    });
    courtDispatch({
      type: 'ADD_COURT',
    });
  }

  return (
    <CheckboxGroup
      variantColor="blue"
      defaultValue={[currentCourt]}
      value={selectedCourts}
      onChange={handleCheckboxChange}
    >
      {renderCheckboxes(courtPositions)}
      <Button leftIcon="add" onClick={handleAddCourtButtonClick}>Add new court</Button>
    </CheckboxGroup>
  )
}

export default CourtSwitcher;
