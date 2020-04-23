import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  IconButton,
} from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';

function CourtTab({ id, name }) {
  const { currentCourt } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const courtDispatch = useCourtDispatch();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleClick = event => {
    event.preventDefault();
    courtDispatch({
      type: 'SELECT_COURT',
      court: id,
    });
  }

  const handleDelete = event => {
    event.preventDefault();
    event.stopPropagation();
    if (Object.keys(courtPositions).length === 1) {
      alert('Need at least one court');
      return null;
    }
    console.log(`${id} is been deleted`);
    courtPositionsDispatch({
      type: 'DELETE_COURT',
      id,
    });
    courtDispatch({
      type: 'DELETE_COURT',
      id,
    });
  };

  const backgroundColor = currentCourt === id ? '#3182ce' : null

  return (
      <Flex alignItems="center" bg={backgroundColor} onClick={handleClick}>
        <Box ml={2} mr={4}>
          {name}
        </Box>
        <IconButton
          icon="small-close"
          size="xs"
          variant="ghost"
          isRound
          onClick={handleDelete}
          _hover={{ bg: "blue.700" }}
        />
      </Flex>
  )
}

CourtTab.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CourtTab
