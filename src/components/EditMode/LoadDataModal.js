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

function LoadDataModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} mr={2} variantColor="blue" onClick={onOpen}>
        讀取分佈圖
      </Button>
      <Modal h="100%" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader>選取讀取位置</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaveSlots action="load" onClose={onClose} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>關閉</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoadDataModal;
