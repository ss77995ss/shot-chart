import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Button, Text } from '@chakra-ui/core';
import { shotTypes } from '../../constants/base';

function ShotTypeSelector({ onClick }) {
  const { t } = useTranslation();

  return (
    <Box>
      {Object.values(shotTypes).map((type) => (
        <Button
          key={`shop-type-selector-${type.value}}`}
          variantColor="blue"
          variant="outline"
          mr={2}
          my={2}
          w={24}
          value={type.value}
          onClick={onClick}
        >
          <Text pointerEvents="none" mr={2}>
            {t(type.name)}
          </Text>
          <Text pointerEvents="none" color={`${type.color}.500`}>
            {type.value.toUpperCase()}
          </Text>
        </Button>
      ))}
    </Box>
  );
}

ShotTypeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShotTypeSelector;
