import styled from "styled-components";

export const SectionStyled = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
  background: ${({ theme }) => theme.linearGradient.lightGray};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 1.2rem;
  text-align: right;
  text-shadow: ${({ theme }) => theme.shadow.textShadow};
  padding: 1.5rem 0;
  color: ${({ theme }) => theme.color.darkGray};
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 0;
  }
`;
