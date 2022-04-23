import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/core';
import SaveSlots from './SaveSlots';

function SaveDataModal() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} mr={2} variantColor="blue" onClick={onOpen}>
        {t('saveShotChart')}
      </Button>
      <Modal h="100%" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>{t('selectSaveSlot')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaveSlots action="save" onClose={onClose} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{t('close')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SaveDataModal;
