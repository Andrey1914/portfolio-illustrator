import styled from "styled-components";

export const HeaderStyled = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
  background: ${({ theme }) => theme.linearGradient.gray};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.color.darkGray};
  text-align: right;
  text-shadow: ${({ theme }) => theme.shadow.textShadow};
`;
