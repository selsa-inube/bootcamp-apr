import styled from 'styled-components';

export const BusinessNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BusinessNavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  width: 96rem;
`;

export const BusinessNavItem = styled.li`
  margin-left: 35px;
`;

export const BusinessNavItemLink = styled.a`
  text-decoration: none;
  color: rgb(167, 166, 166);
  font-size: 1em;
  &:hover {
    color: #222222;
    text-decoration: underline;
  }
`;
