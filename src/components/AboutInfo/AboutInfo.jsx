import React from "react";
import pic from "../../jpg/tania-proskurnia.jpg";
import {
  ModalCloseButton,
  ModalHeader,
  ModalTitle,
  ModalDialog,
  ModalBody,
  ModalContent,
} from "./AboutInfo.styled";
import { MdClose } from "react-icons/md";

export const Modal = ({
  isVisible = false,
  title,
  content,
  // footer,
  onClose,
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <div onClick={onClose}>
      <ModalDialog onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton type="button" onClick={onClose}>
            <MdClose size={24} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <img src={pic} alt="Illustrator Tania Proskurnia" width="320px" />
          <ModalContent>{content}</ModalContent>
        </ModalBody>
      </ModalDialog>
    </div>
  );
};
