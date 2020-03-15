import React from 'react';
import { Button, Checkbox, CheckboxGroup } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../contexts/court';
import { useCourtPositionsState } from '../contexts/courtPositions';
import CourtCheckbox from './CourtCheckbox';

const renderCheckboxes = courtPositions => {
  return (
    Object.values(courtPositions).map((court, index) => (
      <Checkbox value={court.id}>
        <CourtCheckbox id={court.id} name={court.name} />
      </Checkbox>
    ))
  )
};

function CourtSwitcher({ onChange }) {
  const { currentCourt } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositions = useCourtPositionsState();
  const handleCheckboxChange = checkedCourts => {
    courtDispatch({
      type: 'SELECT_COURTS',
      courts: checkedCourts,
    });
  };
  return (
    <CheckboxGroup
      variantColor="blue"
      defaultValue={[currentCourt]}
      onChange={handleCheckboxChange}
    >
      {renderCheckboxes(courtPositions)}
      <Button leftIcon="add">Add new court</Button>
    </CheckboxGroup>
  )
}

export default CourtSwitcher;
