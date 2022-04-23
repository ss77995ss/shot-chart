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

function LoadDataModal() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} mr={2} variantColor="blue" onClick={onOpen}>
        {t('loadShotChart')}
      </Button>
      <Modal h="100%" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>{t('selectLoadSlot')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaveSlots action="load" onClose={onClose} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{t('close')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoadDataModal;
