import React, {
    useState, 
    useEffect
} from 'react'
import {
    Bets,
    Winner,
    BetWinner,
    Result,Delete,
    Background
} from './RaceResultsStyle'

import Axios from 'axios';

//F1 api containing the most recent race winner
const API_URL = 'http://ergast.com/api/f1/current/last/results/1.json'
const DATA_URL = 'http://localhost:5000/get'

function RaceResults() {
    
    const [betData, setBetData] = useState([]);
    const [result, setResult] = useState();
    const [raceNumber, setRaceNumber] = useState();
    const [check, setCheck] = useState(0);

    //creates an array of people who won the bet
    //filter method checks to see if the driver selected matches the driver from the race winner API
    const winner = betData.filter((value)=>{
        return value.driver.includes(result);
    })

    //renders data from backend on page load and whenever the value of check changes
    useEffect(()=>{
        //isMounted prevents setState warning
        let isMounted = true;
            Axios.get(DATA_URL).then((response)=>{
            if(isMounted){  
            setBetData(response.data)}
            })
        return ()=>isMounted = false;
    },[check])
    
    useEffect(()=>{
        let isMounted = true;

        //gets and sets winning driver's first three letters of last name
            Axios.get(API_URL).then((newResult) => {
            if(isMounted){
            setResult(newResult.data.MRData.RaceTable.Races[0].Results[0].Driver.code)}
            });
        return ()=>isMounted = false;
    },[])

    useEffect(()=>{
        let isMounted = true;

        //gets and sets winning driver's racing number
            Axios.get(API_URL).then((newNumber) => {
            if(isMounted){
            setRaceNumber(newNumber.data.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber)}
            });
        return ()=>isMounted = false;
    },[])

    //event listenser for the get function
    //problems with promises led to use of setTimeout to delay the rerender
    const checker = ()=>{
        setTimeout(()=>{
            setCheck(check + 1)
        },1)     
    }

    //deletes user based on unique username
    const deleteBet = (user) => {
        Axios.delete(`http://localhost:5000/delete/${user}`)
        
    } 

    return (
        <Background>
                <Winner>     
                    <h1>RACE WINNER</h1>
                    <h2>{`${result} ${raceNumber}`}</h2>
                </Winner>
                    <br />  
            <Result>
                <Bets>
                    <h1>Bets Placed:</h1>
                    <hr />
                        {betData.map(({
                            id, 
                            userName, 
                            driver, 
                            bet
                        })=>{
                        return <div key={id}>
                                    <h2>{`Username: ${userName}`}</h2>
                                    <h2>{`Driver Selected: ${driver}`}</h2>
                                    <h2>{`Bet Placed: $${bet}`}</h2>
                                    <Delete 
                                    onClick={()=>{
                                        deleteBet(userName);

                                        //checker function runs to trigger the useEffect rerender
                                        checker();
                                    }}
                                    >Delete Bet</Delete>
                                    <hr />
                                </div>
                        })}
                </Bets>

                <BetWinner>
                    <h1>Winner of this race's bets are:</h1>
                    <hr />
                        {winner.map(({
                            id,
                            userName,
                            bet
                        })=>{
                        return <div key ={id}>
                                    <h2>{`Username: ${userName} || Total Winnings: $${bet * 2}`}</h2>
                                </div>
                })}
                </BetWinner>
            </Result>
        </Background>  
    )
}
export default RaceResults;