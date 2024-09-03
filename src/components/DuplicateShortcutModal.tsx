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
import getTranslatedStrings from "../utils/functions/get-translated-strings";

export default function DuplicateShortcutModal(props: DuplicateShortcutModalProps) {
  const {
    onConfirm,
    onClose,
    isOpen,
    onAbort,
    description,
    title
  } = props;

  const strings = getTranslatedStrings();

  return (
    <Modal isCentered trapFocus size={{base: "full", md: "lg"}} onClose={onClose} isOpen={isOpen}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader padding="1.6rem 2rem 0">
          <Heading>{title}</Heading>
          <ModalCloseButton fontSize="1.4rem" right="1rem" top="1rem"/>
        </ModalHeader>
        <ModalBody padding="1.6rem 2rem">
          {description}
        </ModalBody>
        <ModalFooter gap="2rem" padding="0 2rem 1.6rem">
          <Button flex={1} variant="outline" colorScheme="teal" onClick={onAbort}>{strings.button.abort}</Button>
          <Button flex={1} variant="solid" colorScheme="teal" onClick={onConfirm}>{strings.button.confirm}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export interface DuplicateShortcutModalProps {
  onConfirm: () => void;
  onAbort: () => void;
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}