import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
    padding: 10px;
    margin-top: 0px;
    color:red;
    background-color: lightgray;
`

function Footer() {
    
    return(
        <Foot>
            <h3>Contact</h3>
            <p>Email: <a href='mailto: f1bets@gmail.com'>f1bets@gmail.com</a></p>
            <p>Phone: +1(123)456-7890</p>
        </Foot>
    )
}

export default Footer;