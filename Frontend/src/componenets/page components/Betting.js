import React, {
    useState,
    useEffect
} from 'react';
import Axios from 'axios';
import {
    BetStyle, 
    Input,
    Select,
    Submit
} from './BettingStyle'

function Betting(){

    const [userName,setName] = useState('');
    const [driver,setDriver] = useState('');
    const [bet,setBet] = useState('');
    const [betData, setBetData] = useState([]);

    useEffect(()=>{
        //isMounted prevents setState warning
        let isMounted = true;
            Axios.get('http://localhost:5000/get').then((response)=>{
            if(isMounted){
            setBetData(response.data)}
            });
        return () => isMounted = false;
    },[])
   
    //an array containing the username only
    const users = betData.map((value)=>{
        return value.userName;
    })
    
    const handleSubmit = () => {
        //check for any usernames that alredy exist, 
        //any repeats will increment count causing form to not be able to be submitted
        let count = 0;
        users.forEach((user)=>{
            if(user === userName){
            count++;
            }
            })

        //check to see if form is filled
        if(userName === '' || driver === '' || bet ===''){
            alert('Form Incomplete')

        }else if(count !== 0){
            alert('Username Taken')
        }else{
            Axios.post('http://localhost:5000/post'
            ,{
                userName: userName, 
                driver: driver, 
                bet: bet
            }).catch(()=>{
                alert('error')
            })    
        }
    }

    return(
        <BetStyle>
            <form>
                <h2>Please place your bets</h2>
                <label>Username: </label>
                    <Input placeholder = 'Username' 
                    name='userName' value = {userName}
                    onChange = {e => setName(e.target.value)}
                    />
            <br />
                <label>Race Winner: </label>
                    <Select onChange = {e => setDriver(e.target.value)} 
                        value = {driver} 
                        name = 'driver'>
                            <option value=''>--Please Choose a Driver--</option>
                            <option value = 'RIC 3'>RIC 3</option>
                            <option value = 'NOR 4'>NOR 4</option>
                            <option value = 'VET 5'>VET 5</option>
                            <option value = 'LAT 6'>LAT 6</option>
                            <option value = 'RAI 7'>RAI 7</option>
                            <option value = 'GRO 8'>GRO 8</option>
                            <option value = 'GAS 10'>GAS 10</option>
                            <option value = 'PER 11'>PER 11</option>
                            <option value = 'LEC 16'>LEC 16</option>
                            <option value = 'STR 18'>STR 18</option>
                            <option value = 'MAG 20'>MAG 20</option>
                            <option value = 'ALB 23'>ALB 23</option>
                            <option value = 'KVY 26'>KVY 26</option>
                            <option value = 'OCO 31'>OCO 31</option>
                            <option value = 'VER 33'>VER 33</option>
                            <option value = 'HAM 44'>HAM 44</option>
                            <option value = 'SAI 55'>SAI 55</option>
                            <option value = 'RUS 63'>RUS 63</option>
                            <option value = 'BOT 77'>BOT 77</option>
                            <option value = 'GIO 99'>GIO 99</option>
                    </Select>
            <br />
                <label>Bet Amount (USD): </label>
                    <Input placeholder = '$Bet' 
                        name = 'bet' value = {bet} 
                        onChange={e => setBet(e.target.value)}/>
            <br />
                    <Submit onClick={handleSubmit}>Submit Bet</Submit>
            </form>
                <h6>All bets are final</h6>
        </BetStyle>
    )
}

export default Betting;