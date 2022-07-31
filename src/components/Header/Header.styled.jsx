import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
