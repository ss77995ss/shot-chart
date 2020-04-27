import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  Button,
  Input,
  Flex,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';
import { useCourtPositionsDispatch } from '../../hooks/courtPositions';

function CourtNameForm({ id }) {
  const courtPositionsDispatch = useCourtPositionsDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ court }) => {
    courtPositionsDispatch({
      type: 'EDIT_COURT_NAME',
      id,
      court,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex mt={5} alignItems="flex-end">
        <FormControl>
          <FormLabel htmlFor="court">修改分佈圖名稱</FormLabel>
          <Input ref={register} name="court" color="black" defaultValue={id} />
        </FormControl>
        <Button
          ml={3}
          type="submit"
          variantColor="blue"
        >
          儲存
        </Button>
      </Flex>
    </form>
  );
}

CourtNameForm.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CourtNameForm
