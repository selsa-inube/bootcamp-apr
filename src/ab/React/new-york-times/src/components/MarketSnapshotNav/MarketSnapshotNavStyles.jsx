// MarketSnapshotNav/MarketSnapshotNavStyles.js
import styled from "styled-components";

export const MarketSnapshotNavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  margin-top: 10rem;
`;

export const MarketSnapshotNavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const MarketSnapshotNavItem = styled.li`
  margin: 0 20px;
`;

export const MarketLink = styled.a`
  text-decoration: none;
  color: rgb(167, 166, 166);
  font-size: 1em;

  &:hover {
    color: #222222;
    text-decoration: underline;
  }
`;
