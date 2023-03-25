// import styled from "@emotion/styled";
import styled from "styled-components";

export const SectionStyled = styled.div`
  box-shadow: rgba(33, 35, 38, 0.2) 0 10px 10px -5px;
  background: linear-gradient(45deg, #f0f0f0, #cecece);
`;

export const Title = styled.h2`
  font-family: "Montserrat";
  font-size: 18px;
  text-align: right;
  text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
    0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 0;
  }
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3rem 0;
  }
`;
