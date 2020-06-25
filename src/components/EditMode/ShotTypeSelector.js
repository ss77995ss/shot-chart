import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@chakra-ui/core';
import { SHOT_TYPE } from '../../constants/base';

function ShotTypeSelector({ onClick }) {
  return (
    <Box>
      <Button
        key={`shop-type-selector-${SHOT_TYPE.MADE}}`}
        variantColor="blue"
        mr={2}
        my={2}
        value={SHOT_TYPE.MADE}
        onClick={onClick}
      >
        進
      </Button>
      <Button
        key={`shop-type-selector-${SHOT_TYPE.MISS}}`}
        variantColor="blue"
        mr={2}
        my={2}
        value={SHOT_TYPE.MISS}
        onClick={onClick}
      >
        不進
      </Button>
    </Box>
  );
}

ShotTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShotTypeSelector;
