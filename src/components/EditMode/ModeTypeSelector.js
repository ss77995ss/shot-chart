import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@chakra-ui/core';
import { MODE_TYPE } from '../../constants/base';

function ModeTypeSelector({ onClick }) {
  return (
    <Box>
      {
        Object.entries(MODE_TYPE)
          .filter(entry => entry[1] !== MODE_TYPE.INSERT)
          .map(entry => (
            <Button
              variantColor='blue'
              mr={2}
              my={2}
              value={entry[1]}
              onClick={onClick}
            >
              {entry[0]}
            </Button>
          ))
      }
    </Box>
  )
}

ModeTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ModeTypeSelector;
