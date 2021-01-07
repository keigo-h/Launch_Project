import React from 'react'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import styled from 'styled-components';
import Header from './page components/Header'
import Footer from './page components/Footer'
import HomePageContent from './page components/HomePageContent'
import BetPage from './BetPage'
import ResultsPage from './ResultsPage'

const StyledLink = styled(Link)`
    padding:10px;
    color:black;
    text-decoration: none;
    border: 1px solid black;
    background-color:lightgray;
    &:hover {
        background-color:white;
    }
`;

const Links = styled.div`
    padding: 12px;
    padding-left:0;
    margin:0;
    background-color:lightgray;
`

function Homepage() {
    return (
    <BrowserRouter>
                <Links>
                    <StyledLink to='/'>Home </StyledLink>
                    <StyledLink to='/bet'>Make a Bet </StyledLink>
                    <StyledLink to='/results'>Results </StyledLink>
                </Links>

                <Header/>
                
                <Switch>
                    <Route exact path ='/bet' component={BetPage}/>
                    <Route exact path ='/' component={HomePageContent}/>
                    <Route exact path = '/results' component={ResultsPage}/>
                </Switch>

                <Footer/>
    </BrowserRouter>
    )
}

export default Homepage
