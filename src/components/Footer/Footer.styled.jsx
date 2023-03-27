import styled from "styled-components";

export const Wrap = styled.div`
  padding: 30px 0 90px;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 30px 0;
  }
`;

export const Copyright = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  text-align: left;
  color: rgba(51, 51, 51, 0.7);

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.5rem;
    font-size: 16px;
  }
`;

export const GitHubLink = styled.a`
  :hover,
  :focus {
    color: rgba(0, 60, 103, 0.6);
  }
`;
