import styled from "styled-components";


export const StyledSection = styled.section`
    margin-top: 25px;

    nav{
        display: flex;
    }

    ul{
        display: flex;
        list-style: none;
        align-items: center;
    }

    a{
        margin: 0 20px;
        text-decoration: none;
        color: #969696;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1em;
    }

    a:hover{
        border-bottom: 1px solid rgb(182, 182, 182);
    }
`