import styled from "styled-components";

const StyledArticle = styled.article`
    margin-top:3%;

    h3{
        margin-bottom: 3%;
    }

    img{
        width: 27%;
        float: right;
    }

    .detail_and_date{
    display: flex;
    font-size: 1.1em;
    align-items: center;
    margin: 20px 0;
    }

    span{
    color: white;
    background-color: black;
    border: none;
    border-radius: 2px;
    padding: 7px 14px;
    font-size: 0.75em;
    margin-right: 2%;
    }

    h2{
    font-size: 1.1em;
    float: left;
    width: 70%;
    font-weight: 400;
    }

    p{
    font-size: 1.1em;
    color: rgb(175, 175, 175);
    padding: 20px 0;
    }

    .continue{
    border: none;
    border-bottom: 1px solid rgb(182, 182, 182);
    color: rgb(182, 182, 182);
    padding-bottom: 2px;
    font-size: 1em;
    text-decoration: none;
    }

    .continue:hover{
        color: black;
        border-bottom: 1px solid black;
    }

`;
export { StyledArticle };