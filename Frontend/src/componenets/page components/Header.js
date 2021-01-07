import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    color: red;
    text-align: center;
    background-color: lightgray;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 2%;
    font-size: 100pt;
`

function Header(){

    return( 
        <Heading>
            F1 BETS
        </Heading>
    )
}

export default Header