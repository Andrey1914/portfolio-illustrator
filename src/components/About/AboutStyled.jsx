import styled from "styled-components";

export const SectionStyled = styled.div`
  background: linear-gradient(45deg, #af6600, #787878); ;
`;

export const AboutHeader = styled.div`
  margin-bottom: 20px;
`;

export const AboutTitle = styled.h2`
  font-family: "Bad Script";
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  text-align: right;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const Photo = styled.img`
  width: 200px;
  height: auto;
`;

export const AboutContent = styled.div`
  font-family: "Bad Script";
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;
