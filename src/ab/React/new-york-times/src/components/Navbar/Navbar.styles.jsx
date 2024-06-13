
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin-left: 40px;
  margin-right: 30px;
`;

export const NavP = styled.p`
  font-weight: bold;
  width: 80px;
`;

export const NavItemLink = styled.a`
  text-decoration: none;
  color: rgb(167, 166, 166);
  font-size: 1em;
  &:hover {
    color: #222222;
    text-decoration: underline;
  }
`;
