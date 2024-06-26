import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(204, 204, 204);
  align-items: center;
  padding: 15px 0;
`;

export const Title = styled.h1`
  font-family: "UnifrakturMaguntia", cursive;
`;
export const Button = styled.button`
  font-size: 1em;
  padding: 8px 15px;
  background-color: transparent;
  border: 2px solid black;
  &:hover {
    color: #494949;
    cursor: pointer;
  }
  &:first-child {
    border: none;
  }
`;
export const Sidebar = styled.nav`
   left: 1px;
   position: fixed;
   height: 100%;
   width: 50px;
   background-color: #f7f6f6;
   justify-content: space-between;
   border-radius: 5px;

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 27rem;
    margin-top: 1rem;
    text-align: center;

  }
`;

