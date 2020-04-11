import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/core';
import { useCourtPositionsDispatch } from '../../hooks/courtPositions';

function TabModal({ id, isOpen, onClose }) {
  const [inputValue, setInputValue] = React.useState('');
  const courtPositionsDispatch = useCourtPositionsDispatch();

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleSave = () => {
    courtPositionsDispatch({
      type: 'EDIT_COURT_NAME',
      id,
      court: inputValue,
    })
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Court Name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input onChange={handleInputChange} />
        </ModalBody>
        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variantColor="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

TabModal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default TabModal
