import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
import { PLAYER_POSITION } from '../../constants/base';
import { useCourtState, useCourtDispatch } from '../../hooks/court';

function PlayerNameModal() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { playerInfo } = useCourtState();
  const courtDispatch = useCourtDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (playerInfo) => {
    courtDispatch({
      type: 'EDIT_PLAYER_INFO',
      playerInfo,
    });
    onClose();
  };
  const { team, name, number, position, hand, gameCounts } = playerInfo;

  return (
    <>
      <Button variantColor="blue" onClick={onOpen}>
        {t('editPlayerData')}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>{t('editPlayerData')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box alignItems="flex-end">
                <FormControl>
                  <FormLabel htmlFor="team">{t('teamName')}</FormLabel>
                  <Input ref={register} name="team" defaultValue={team} />
                  <FormLabel htmlFor="name">{t('playerName')}</FormLabel>
                  <Input ref={register} name="name" defaultValue={name} />
                  <FormLabel htmlFor="number">{t('playerNo')}</FormLabel>
                  <Input ref={register} name="number" defaultValue={number} />
                  <FormLabel htmlFor="position">{t('playerPosition')}</FormLabel>
                  <Select name="position" ref={register} defaultValue={position}>
                    {Object.values(PLAYER_POSITION).map((position, index) => (
                      <option key={`position-${index}`} value={position}>
                        {position}
                      </option>
                    ))}
                  </Select>
                  <FormLabel htmlFor="hand">{t('dominantHand')}</FormLabel>
                  <RadioGroup name="hand" defaultValue={hand} isInline>
                    <Radio ref={register} value="none">
                      {t('none')}
                    </Radio>
                    <Radio ref={register} value="rightHand">
                      {t('rightHand')}
                    </Radio>
                    <Radio ref={register} value="leftHand">
                      {t('leftHand')}
                    </Radio>
                  </RadioGroup>
                  <FormLabel htmlFor="games">{t('games')}</FormLabel>
                  <Input ref={register} name="gameCounts" defaultValue={gameCounts} />
                </FormControl>
                <Button my={3} type="submit" variantColor="blue">
                  {t('save')}
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PlayerNameModal;
