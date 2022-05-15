import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@chakra-ui/core';
import { MODE_TYPE } from '../../constants/base';

function ModeTypeSelector({ onClick }) {
  const { t } = useTranslation();

  return (
    <Box>
      {Object.entries(MODE_TYPE)
        .filter((entry) => entry[1] !== MODE_TYPE.INSERT)
        .map((entry) => (
          <Button
            key={`shop-type-selector-${entry[0]}`}
            variantColor="blue"
            mr={2}
            my={2}
            value={entry[1]}
            onClick={onClick}
          >
            {t(entry[1])}
          </Button>
        ))}
    </Box>
  );
}

ModeTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModeTypeSelector;
