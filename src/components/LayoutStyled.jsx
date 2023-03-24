import styled from "styled-components";

export const HeaderSection = styled.header`
  padding: 3rem 0;
  /* background: linear-gradient(45deg, #595974, #232424); */
`;

export const FooterSection = styled.footer`
  padding: 1rem 0;
  /* background: linear-gradient(45deg, #595974, #232424); */
`;

export const Section = styled.section`
  padding: 1.5rem 0;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 0;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  margin: 0 1.5rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 2rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 3.5rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 3.5rem;
  }
`;

export const StyledContainer = styled.div`
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: 1rem;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
    max-width: 80%;
    gap: 2rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(100% - 2rem);
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: calc(100% - 15rem);
  }
`;
