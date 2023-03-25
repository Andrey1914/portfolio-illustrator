import styled from "styled-components";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";

export const FormTitle = styled.h3`
  font-family: "Montserrat";
  font-size: 1.5rem;
  text-align: center;
`;

export const FormContainer = styled.div`
  width: calc(100% - 30px);
  margin: 0 auto;
  @media all and (min-width: 768px) {
    width: 400px;
  }
  @media all and (min-width: 1280px) {
    width: 500px;
  }
`;

export const FormSubmission = styled.form`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormSpan = styled.span`
  font-size: 0.8rem;
`;

export const InputContainer = styled.div`
  display: block;
  position: relative;
`;

export const IconPerson = styled(AiOutlineUser)`
  color: rgba(0, 60, 103, 0.6);
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 1.16rem;
    left: 1rem;
  }
`;

export const IconEmail = styled(AiOutlineMail)`
  color: rgba(0, 60, 103, 0.6);
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 1.16rem;
    left: 1rem;
  }
`;
export const IconMessage = styled(AiOutlineMessage)`
  color: rgba(0, 60, 103, 0.6);
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 1.16rem;
    left: 1rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.8rem;
  border-radius: 0.3rem;
  background: transparent;
  transition: outline 100ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 60, 103, 0.4);
  resize: none;
  color: #000;
  font-family: "Montserrat";
  font-size: 0.8rem;

  :hover,
  :focus {
    outline: 3px solid rgba(0, 60, 103, 0.6);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 1.8rem;
  border-radius: 0.3rem;
  background: transparent;
  transition: outline 100ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 60, 103, 0.4);
  resize: none;
  color: #000;
  font-family: "Montserrat";
  font-size: 0.8rem;

  :hover,
  :focus {
    outline: 3px solid rgba(0, 60, 103, 0.6);
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`;

export const Button = styled.button`
  width: max-content;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
  transition: all 400ms ease;
  background-color: rgba(0, 60, 103, 0.4);
  color: #fff;
  margin: 0 auto;
  font-family: "Montserrat";
  font-size: 0.8rem;

  :hover {
    background-color: rgba(0, 60, 103, 0.6);
    color: #fff;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.75rem 1.2rem;
    font-size: 1rem;
  }
`;
