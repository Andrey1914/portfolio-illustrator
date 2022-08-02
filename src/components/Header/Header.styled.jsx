import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Img = styled.img`
  max-width: 1519px;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  padding: 8px;
  border-radius: 20px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #cccccc;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  gap: 5px;
  color: black;
}
`;
