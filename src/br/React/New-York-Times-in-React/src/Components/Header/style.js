import styled from "styled-components";

const StyledUpperLine = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(204, 204, 204);
    align-items: center;
    padding: 1% 0;

    img{
        width: 250px;
    }

    button{
        font-size: 1em;
        font-weight: bold;
        padding: 8px 15px;
        background-color: transparent;
        border: 1px solid black;
    }

    button:first-child{
        border: none;
    }

    button:hover{
        transform: scale(1.1);
        font-size: 1.01em;
    }

    .iconHeader{
        font-size: 1.2em;
        margin-right: 30px;
    }

    span::after{
    content: "●●";
    color: transparent;
    font-size: 50%;
    background-color: red;
    border: 0.5px solid white; 
    border-radius: 50%;
    position: relative;
    bottom: 8px;
    right: 38px;
    }
`;

export {StyledUpperLine}