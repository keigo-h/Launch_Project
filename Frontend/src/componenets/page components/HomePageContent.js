import React from 'react';
import styled from 'styled-components';
import LewisHamilton from './images/LewisHamilton.jpg'
import MaxVerstappen from './images/MaxVerstappen.jpg'

const Head = styled.h1`
    padding: 5%;
    margin: 5%;
    text-align: center;
    color: white;
`
const Pic = styled.img`
    width: auto;
    height: 150px;
    border-radius: 50%;
`
const Align = styled.div`
    padding: 10%;
    margin:0;   
    display: flex;
    align-content: center;
    justify-content: space-between;
    background-image: linear-gradient(to bottom right, red, white);
    
`

function HomePageContent(){
    return(
        <Align> 
           <Pic src = {LewisHamilton} alt = 'Lewis Hamilton'/>
            <Head>Welcome to F1's Betting Website</Head>
            <Pic src = {MaxVerstappen} alt = 'Max Verstappen'/>
        </Align>
    )
}

export default HomePageContent;