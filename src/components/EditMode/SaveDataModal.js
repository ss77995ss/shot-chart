import React from 'react';
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} mr={2} variantColor="blue" onClick={onOpen}>儲存分佈圖</Button>
      <Modal h="100%" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>選取儲存位置</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaveSlots action="save" onClose={onClose} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>關閉</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SaveDataModal;
