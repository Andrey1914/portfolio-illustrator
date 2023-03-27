import styled from "styled-components";

export const StickFollowIcon = styled.div`
  top: 45%;
  left: 0.5rem;
  width: 20px;
  height: 200px;
  position: fixed;
  margin-top: -100px;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 35%;
    left: 45px;
  }
`;

export const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialIconItem = styled.li`
  display: block;
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  transition: all 0.3s;
  color: rgba(51, 51, 51, 0.7);
`;

export const SocialLink = styled.a`
  :hover,
  :focus {
    color: rgba(0, 60, 103, 0.6);
  }
`;

export const SocialIconText = styled.p`
  top: 70px;
  left: -24px;
  width: 68px;
  height: 20px;
  color: rgba(51, 51, 51, 0.7);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  position: relative;
  transform: rotate(-90deg);

  &::after {
    top: 9px;
    right: -48px;
    width: 40px;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background-color: rgba(51, 51, 51, 0.7);
  }
`;
