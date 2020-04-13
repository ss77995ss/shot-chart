import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/core';
import { MODE_TYPE } from '../../constants/base';

function ModeTypeSelector({ onClick }) {
  return (
    <Box>
      <button value={MODE_TYPE.UNDO} onClick={onClick}>{MODE_TYPE.UNDO}</button>
      <button value={MODE_TYPE.DELETE} onClick={onClick}>{MODE_TYPE.DELETE}</button>
    </Box>
  )
}

ModeTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ModeTypeSelector;
