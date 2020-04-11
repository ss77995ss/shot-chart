import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';
import { useCourtPositionsState, useCourtPositionsDispatch } from '../../hooks/courtPositions';
import TabModal from './TabModal';

function CourtTab({ id, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentCourt } = useCourtState();
  const courtPositions = useCourtPositionsState();
  const courtDispatch = useCourtDispatch();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleClick = () => {
    courtDispatch({
      type: 'SELECT_COURT',
      court: id,
    });
  }

  const handleDelete = () => {
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
      <Flex algin="center" bg={backgroundColor}>
        <Box onClick={handleClick}>
          {name}
        </Box>
        <IconButton
          icon="edit"
          size="sm"
          variant="ghost"
          isRound
          onClick={onOpen}
        />
        <IconButton
          icon="small-close"
          size="sm"
          variant="ghost"
          isRound
          onClick={handleDelete}
        />
        <TabModal id={id} isOpen={isOpen} onClose={onClose} />
      </Flex>
  )
}

CourtTab.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CourtTab
