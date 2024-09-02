import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React from "react";

export default function DuplicateShortcutModal(props: DuplicateShortcutModalProps) {
  const {
    onConfirm,
    onClose,
    isOpen,
    onAbort,
    description
  } = props;

  return (
    <Modal isCentered trapFocus size={{base: "full", md: "lg"}} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader padding="1.6rem 2rem 0">
          <Heading>Confirm new shortcut</Heading>
          <ModalCloseButton fontSize="1.4rem" right="1rem" top="1rem"/>
        </ModalHeader>
        <ModalBody padding="1.6rem 2rem">
          {description}
        </ModalBody>
        <ModalFooter gap="2rem" padding="0 2rem 1.6rem">
          <Button flex={1} variant="outline" colorScheme="teal" onClick={onAbort}>Abort</Button>
          <Button flex={1} variant="solid" colorScheme="teal" onClick={onConfirm}>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export interface DuplicateShortcutModalProps {
  onConfirm: () => void;
  onAbort: () => void;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}