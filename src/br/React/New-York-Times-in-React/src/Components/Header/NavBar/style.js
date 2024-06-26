import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;


    .iconNav{
        background-color: black;
        color: white;
        padding: 30px;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    list-style: none;

    a{
        margin: 0 35px;
        text-decoration: none;
        color: #969696;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
    }

    a:hover{
        border-bottom: 1px solid rgb(182, 182, 182);
    }

`;

export {StyledUl, StyledNav}