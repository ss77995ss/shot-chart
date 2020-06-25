import React from 'react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState } from '../../hooks/courtPositions';

const renderCheckboxes = (courtPositions) => {
  return Object.values(courtPositions).map((court, index) => (
    <Checkbox key={`checkbox-${court.id}`} value={court.id}>
      {court.name}
    </Checkbox>
  ));
};

function CourtSwitcher() {
  const { currentCourt, selectedCourts } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const courtPositions = useCourtPositionsState();

  const handleCheckboxChange = (checkedCourts) => {
    courtDispatch({
      type: 'SELECT_COURTS',
      courts: checkedCourts,
    });
  };

  return (
    <CheckboxGroup
      variantColor="blue"
      defaultValue={[currentCourt]}
      value={selectedCourts}
      onChange={handleCheckboxChange}
    >
      {renderCheckboxes(courtPositions)}
    </CheckboxGroup>
  );
}

export default CourtSwitcher;
