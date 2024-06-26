import styled from "styled-components";

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  color: black;

  &.winning-square {
    background-color: greenyellow;
  }
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Status = styled.div`
  margin-bottom: 10px;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

export { SquareButton, BoardRow, Status, GameContainer, GameInfo };
