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
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from '@chakra-ui/core';
import { PLAYER_POSITION } from '../../constants/base'
import { useCourtState, useCourtDispatch } from '../../hooks/court';

function PlayerNameModal() {
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
  const { team, name, number, position, hand, games } = playerInfo;

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
                  <Select name="position" ref={register} defaultValue={position}>
                    {
                      Object.values(PLAYER_POSITION).map(position => (
                        <option key={`position-${position}`} value={position}>{position}</option>
                      ))
                    }
                  </Select>
                  <FormLabel htmlFor="hand">慣用手</FormLabel>
                  <RadioGroup name="hand" defaultValue={hand} isInline>
                    <Radio ref={register} value="右手">右手</Radio>
                    <Radio ref={register} value="左手">左手</Radio>
                  </RadioGroup>
                  <FormLabel htmlFor="games">場次</FormLabel>
                  <Input ref={register} name="games" defaultValue={games} />
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

export default PlayerNameModal
