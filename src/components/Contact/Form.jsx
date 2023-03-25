import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FormContainer,
  FormTitle,
  FormSubmission,
  FormSpan,
  InputContainer,
  FormInput,
  FormTextarea,
  Button,
  IconPerson,
  IconEmail,
  IconMessage,
} from "./FormStyled";
import { Section, Container } from "../LayoutStyled";

export const Form = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_mtn6fae",
        "template_4f7w5vq",
        formRef.current,
        "o3nqYIkG5NEcJ1HjD"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };

  return (
    <Section id="contact">
      <Container>
        <FormContainer>
          <FormSubmission ref={formRef} onSubmit={handleSubmit}>
            <FormTitle>Contact me. </FormTitle>
            <InputContainer>
              <IconPerson />
              <FormInput
                type="text"
                placeholder="Your full name"
                name="user_name"
                required
              />
            </InputContainer>
            <InputContainer>
              <IconEmail />
              <FormInput
                type="text"
                placeholder="Your email"
                name="user_email"
                required
              />
            </InputContainer>
            <InputContainer>
              <IconMessage />
              <FormTextarea
                placeholder="Your message"
                rows="7"
                name="message"
                required
              ></FormTextarea>
            </InputContainer>
            <Button type="submit">Send message</Button>
            {message && <FormSpan>Thanks, I'll contact you shortly.</FormSpan>}
          </FormSubmission>
        </FormContainer>
      </Container>
    </Section>
  );
};
