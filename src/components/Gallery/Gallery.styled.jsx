import styled from "@emotion/styled";

export const Container = styled.div`
  width: 990px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 16px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Element = styled.li`
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.06);
  }
`;

export const Img = styled.img`
  width: 300px;
  border-radius: 3px;
  box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const ImgBig = styled.img`
  width: 960px;
  border-radius: 3px;
  box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.3);
`;
