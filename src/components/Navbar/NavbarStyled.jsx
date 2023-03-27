import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background: rgba(0, 60, 103, 0.4);
  border: 2px solid rgba(0, 60, 103, 0.1);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(3px);
`;

export const NavLink = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  transition: all 400ms ease;
  :hover {
    background: rgba(0, 60, 103, 0.4);
  }
  :active {
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.light};
  }
`;
