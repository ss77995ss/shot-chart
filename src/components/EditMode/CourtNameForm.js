import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Button, Input, Flex, FormControl, FormLabel } from '@chakra-ui/core';
import { useCourtPositionsDispatch } from '../../hooks/courtPositions';

function CourtNameForm({ id }) {
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const onSubmit = ({ court }) => {
    courtPositionsDispatch({
      type: 'EDIT_COURT_NAME',
      id,
      court,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex mt={5} alignItems="flex-end">
        <FormControl>
          <FormLabel htmlFor="court">{t('editShotChartName')}</FormLabel>
          <Input ref={register} name="court" color="black" defaultValue={id} />
        </FormControl>
        <Button ml={3} type="submit" variantColor="blue">
          {t('save')}
        </Button>
      </Flex>
    </form>
  );
}

CourtNameForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CourtNameForm;
