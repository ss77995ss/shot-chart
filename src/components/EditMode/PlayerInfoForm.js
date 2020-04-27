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
      <Button variantColor="blue" onClick={onOpen}>修改球員資料</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>修改球員資料</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box alignItems="flex-end">
                <FormControl>
                  <FormLabel htmlFor="team">隊伍名稱</FormLabel>
                  <Input ref={register} name="team" defaultValue={team} />
                  <FormLabel htmlFor="name">球員名稱</FormLabel>
                  <Input ref={register} name="name" defaultValue={name} />
                  <FormLabel htmlFor="number">球員號碼</FormLabel>
                  <Input ref={register} name="number" defaultValue={number} />
                  <FormLabel htmlFor="position">球員位置</FormLabel>
                  <Input ref={register} name="position" defaultValue={position} />
                  <FormLabel htmlFor="hand">慣用手</FormLabel>
                  <Input ref={register} name="hand" defaultValue={hand} />
                </FormControl>
                <Button
                  my={3}
                  type="submit"
                  variantColor="blue"
                >
                  儲存
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
