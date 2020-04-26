import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Input,
  Box,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';
import { useCourtState, useCourtDispatch } from '../../hooks/court';

function PlayerNameForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { playerInfo } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = playerInfo => {
    courtDispatch({
      type: 'EDIT_PLAYER_INFO',
      playerInfo,
    });
    onClose();
  }
  const { team, name, number, position, hand } = playerInfo;

  return (
    <>
      <Button variantColor="blue" onClick={onOpen}>EDIT PLAYER INFO</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>EDIT PLAYER INFO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box alignItems="flex-end">
                <FormControl>
                  <FormLabel htmlFor="team">Change Team Name</FormLabel>
                  <Input ref={register} name="team" defaultValue={team} />
                  <FormLabel htmlFor="name">Change Player Name</FormLabel>
                  <Input ref={register} name="name" defaultValue={name} />
                  <FormLabel htmlFor="number">Change Player Number</FormLabel>
                  <Input ref={register} name="number" defaultValue={number} />
                  <FormLabel htmlFor="position">Change Player Position</FormLabel>
                  <Input ref={register} name="position" defaultValue={position} />
                  <FormLabel htmlFor="hand">Change Player Hand</FormLabel>
                  <Input ref={register} name="hand" defaultValue={hand} />
                </FormControl>
                <Button
                  my={3}
                  type="submit"
                  variantColor="blue"
                >
                  Save
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PlayerNameForm
