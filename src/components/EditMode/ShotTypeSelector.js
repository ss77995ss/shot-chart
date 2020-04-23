import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@chakra-ui/core';
import { SHOT_TYPE } from '../../constants/base';

function ShotTypeSelector({ onClick }) {
  return (
    <Box>
      {
        Object.entries(SHOT_TYPE).map(entry => (
          <Button
            key={`shop-type-selector-${entry[0]}`}
            variantColor="blue"
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

ShotTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ShotTypeSelector;
