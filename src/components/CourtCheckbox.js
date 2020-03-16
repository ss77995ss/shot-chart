import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Flex,
  Input,
} from '@chakra-ui/core';
import { useCourtDispatch } from '../contexts/court';
import { useCourtPositionsDispatch } from '../contexts/courtPositions';

function CourtCheckbox({ id, name }) {
  const [status, setStatus] = useState('CLOSE');
  const [inputValue, setInputValue] = useState(name);
  const courtDispatch = useCourtDispatch();
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleChange = event => {
    setInputValue(event.target.value);
  }

  const handleEdit = event => {
    if ( status === 'OPEN' && inputValue !== name) {
      setStatus('CLOSE');
      courtPositionsDispatch({
        type: 'EDIT_COURT_NAME',
        id,
        court: name,
      });
      courtDispatch({
        type: 'SELECT_COURTS',
        courts: [id],
      });
    } else {
      setStatus(status === 'CLOSE' ? 'OPEN' : 'CLOSE');
    }
  }
  const handleDelete = () => {
    courtPositionsDispatch({
      type: 'DELETE_COURT',
      id,
    })
  }

  const variant = status === 'CLOSE' ? 'unstyled' : 'flushed';
  const isDisabled = status === 'CLOSE';
  return (
      <Flex algin="center">
        <Input
          w="25%"
          variant={variant}
          value={inputValue}
          isDisabled={isDisabled}
          onChange={handleChange}
        />
        <ButtonGroup>
          <Button variant="solid" variantColor="blue" onClick={handleEdit}>Edit</Button>
          <Button variant="solid" variantColor="blue" onClick={handleDelete}>Delete</Button>
        </ButtonGroup>
      </Flex>
  )
}

CourtCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CourtCheckbox
