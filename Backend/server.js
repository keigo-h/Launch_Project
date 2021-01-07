const express = require('express')
const mysql = require('mysql');
const bodyParser = require ('body-parser');
const cors = require('cors')
require('dotenv').config();

const app = express();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'bet_data'
});

//required for error stating blocked by CORS policy
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/get',(req,res)=> {
const sqlSelect = "SELECT * FROM race_win_bet";
    db.query(sqlSelect, (err,result)=>{
        if (err){
            throw err;
        }
        else{
            res.send(result)
        }
    })
})

app.post('/post', (req,res) => {

    const userName = req.body.userName;
    const driver = req.body.driver;
    const bet = req.body.bet;

    const sqlInsert = "INSERT INTO race_win_bet(userName,driver,bet) VALUES (?,?,?);"
    db.query(sqlInsert, [userName, driver, bet], (err,result)=>{
        if(err) throw err;
    })
})

app.delete('/delete/:userName',(req,res)=>{
    const userName =req.params.userName;
    const sqlDelete = "DELETE FROM race_win_bet WHERE userName = ?";
    db.query(sqlDelete, userName,(err,result)=>{
        if(err) throw err;
    })
})
   
app.listen(5000,()=>{
    console.log('running')
})