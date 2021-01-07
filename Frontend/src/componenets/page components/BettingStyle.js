import styled from 'styled-components';

export const BetStyle = styled.div`
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    box-sizing: border-box;
    border: 2px solid red;
    border-radius: 5px;
    width: 500px;
    height: auto;
    text-align:center;      
    align-items: center;
    background-image: linear-gradient(to bottom right, red, white);
    `
export const Input = styled.input`
    padding: 10px;
    margin:5%;
    border-radius:8px;
    box-shadow:0 0 10px 5px rgba(0,0,0,0.3);
    `
export const Select = styled.select`
    padding: 10px;
    margin:5%;
    border-radius:8px;
    box-shadow:0 0 10px 5px rgba(0,0,0,0.3);
`
export const Submit = styled.button`
    margin:2%;
    &:hover{
        cursor:pointer;
    }
`