# Launch Project - Formula 1 Betting App

A betting website which allows users to record their bets and see if they have won.

## Introduction 

This app will keep track of bets placed on Formula 1 races. The user will input a unique username, select a driver, and input a betting value in USD. The inputs will be stored in a database and results will be received from an external API. The bets will be checked and winners and their respective winnings will be posted. In this application there are three pages. The home page which greets the user, a betting page where the user is able to submit their bets and a results page where the results of the bets are posted. 

## App Details

- Frontend uses React version 17.0.1

- create-react-app used to start frontend

- node v14.15.3 /express used for backend

- mySQL database used

- Yarn 1.22.10 package manager used

## Frontend  

Packages Added Via Yarn

- axios

- react-dom

- react-router-dom

- styled components

- Local Host is on port 3000

  ---

An external API was used to receive the race winners of the most recent race: [API Documentation](https://ergast.com/mrd/)

  
[Race winner data](http://ergast.com/api/f1/current/last/results/1.json) will return JSON data about the driver who won the previous race allowing comparison to the bet placed to determine which user(s) had won the bet.

 ---

 ### Components

 All styling was done with styled-components.
 The page-components folder contains all components used to build the three main pages.

#### Betting.js

This file contains code that primarily receives the user's input and sends it to the backend to be stored. If any data has already been stored it will be received in order to ensure that the username put in by the user is unique.


#### RaceResults.js

This file contains code to post the bets that have been placed, the winner of the most recent race, and users of the bet. The API (shown above) sends data of the race winner which is then compared to the user input to determine the winner. Bets also may be deleted using the 'delete bet' button.


## Backend

Packages Added With Yarn: 

- express

- mysql

- nodemon

- cors  

- Local Host is on port 5000

  ---

**Cors:**

Cors was required to prevent an inaccessibility error.

### Server.js

Get, Post, Delete methods are used for routing. 

## Database

### mySQL setup


```
CREATE SCHEMA `bet_data` ;

CREATE TABLE `bet_data`.`racee_win_bet` (
`id` INT NOT NULL AUTO_INCREMENT,
`userName` VARCHAR(200) NOT NULL,
`driver` VARCHAR(200) NOT NULL,
`bet` VARCHAR(5) NOT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE);
```


## Known Problems

No bugs will appear on console, however, there is an inefficiency within one aspect of the program.
 

Within the RaceResults.js component there is a section of code which receives data from the backend.

```
useEffect(()=>{
let isMounted = true;
Axios.get(DATA_URL).then((response)=>{
if(isMounted){
setBetData(response.data)}
})
return ()=>isMounted = false;
},[check])
```


The check value in the parameter is used to trigger the hook whenever the value of check changes. Ideally a .then method as shown below returning a promise should be used.
 

```
const deleteBet = (user) => {
Axios.delete(`http://localhost:5000/delete/${user}`).then((res)=>{
setBetData(betData.filter(value)=>{
return value.userName !== userName
})
})
}
```

This should have the data on the web page be automatically deleted without the need to manually click the refresh button. However, since the .then method was not returning the desired result a workaround was necessary.

A function was created to change the value of the check to trigger the hook but a setTimeout was necessary to ensure that the data was deleted before running the hook.


```
const checker = ()=>{
setTimeout(()=>{
setCheck(check + 1)
},1)
}
```  

On the onClick event both functions, one to delete the desired data and the other to run the hook;
  

```
onClick={()=>{
deleteBet(userName);
checker();
}}
```

This is extremely inefficient and can cause a multitude of problems as the solution is hard coded and is not reliant on other functions finishing before starting the other. If the data is not deleted before the checker function is triggered the data will not be deleted off of the page unless manually refreshed.
 

## Next Steps

I would like to learn more about the security and potentially apply payment functionality to this app while keeping the data stored in safely. 



