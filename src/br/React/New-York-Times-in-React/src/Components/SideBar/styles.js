import styled from "styled-components";

const StyledUl = styled.ul`
    position: fixed;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    width: 60px;
    align-items: center;
    list-style: none;
    `;

    const StyledA = styled.a`
    color: black;
    
    svg{
        margin: 20px 0;
    }
    `;

export {StyledUl, StyledA}