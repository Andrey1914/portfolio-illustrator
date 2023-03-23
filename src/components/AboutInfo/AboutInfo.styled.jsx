import styled from "styled-components";

export const ModalDialog = styled.div`
  width: calc(100% - 500px);
  margin: 0 auto;
`;

export const ModalHeader = styled.div`
  position: relative;
`;

export const ModalTitle = styled.h3`
  font-family: "Bad Script";
  font-size: 32px;
  font-weight: 400;

  text-align: center;
`;

export const ModalCloseButton = styled.button`
  font-size: 0.85rem;
  letter-spacing: 0.1875rem;
  font-weight: 500;
  transition: 0.3s ease;
  background: transparent;
  padding: 0.5rem;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
`;

export const ModalBody = styled.div`
  display: flex;
  gap: 50px;
`;

export const ModalContent = styled.div`
  font-family: "Bad Script";
  font-size: 24px;
  line-height: 1.5;
`;
