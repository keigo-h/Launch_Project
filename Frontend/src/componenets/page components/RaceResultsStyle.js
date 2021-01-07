import styled from 'styled-components';

export const Bets = styled.div`
    box-sizing: border-box;
    border: 10px solid lightgray;
    width: 500px;
    height: auto; 
    margin-left: 10%;
    margin-right: auto;
    text-align: center;
    align-items:center;
    overflow: auto;
    `
export const BetWinner = styled.div`
    box-sizing: border-box;
    border: 10px solid lightgray;
    width: 500px;
    height: auto;
    margin-left: auto;
    margin-right: 10%;
    text-align: center;
    align-items:center;
    overflow: auto;
    `
export const Winner = styled.div`
    box-sizing: border-box;
    border: 10px solid lightgray;
    width: 500px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    overflow: auto;
`
export const Result = styled.div`
    display: flex;
    justify-content:space-between;
`
export const Delete = styled.button`
    margin:2%;
    &:hover{
        cursor:pointer;
    }
`
export const Background = styled.div`
    background-image: linear-gradient(to bottom right, red, white);
    padding:5%;
`