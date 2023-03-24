import styled from "styled-components";

export const Wrap = styled.div`
  padding: 30px 0 90px;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 30px 0;
  }
`;

export const Copyright = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  text-align: left;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.5rem;
    font-size: 16px;
  }
`;
