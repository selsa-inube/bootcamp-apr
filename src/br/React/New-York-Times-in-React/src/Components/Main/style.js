import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 25px;

    ul{
        display: flex;
        list-style: none;
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
    
`;

const StyledArticles = styled.div`
    border-bottom: 1px solid rgb(220, 220, 220);
    padding-bottom: 2%;
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr;
    gap: 3%;
`

const StyledArticle = styled.article`
    margin-top:3%;
    border-right: 1px solid rgb(220, 220, 220);
    padding-right: 40px;

    img{
        width: 320px;
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
    font-size: 2.3em;
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

    &:nth-child(2) .news > h2{
        font-size: 1.7em;
        margin: 15px 0;
    }

    .news:nth-child(3){
        margin-top: 60px;
    }

    .point{
        margin-top: 50px;
        font-size: 0.6em;
        color: #969696;
        padding: 1%;
    }
`;

export {StyledNav, StyledArticle, StyledArticles}