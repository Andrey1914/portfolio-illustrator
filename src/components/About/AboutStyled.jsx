import styled from "styled-components";

export const SectionStyled = styled.div`
  background: ${({ theme }) => theme.linearGradient.brown};
`;

export const AboutHeader = styled.div`
  margin-bottom: 20px;
`;

export const AboutTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.badScript};
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  text-align: right;
  color: ${({ theme }) => theme.color.darkGray};

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.6rem;
  }
`;

export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    gap: 2rem;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 3rem;
    width: calc(100% - 300px);
  }
`;

export const Photo = styled.img`
  width: 200px;
  height: auto;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 300px;
  }
`;

export const AboutContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.badScript};
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.6rem;
  }
`;
