const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/register', (req,res) => {
    const sql = "INSERT INTO login (`username`,`email`,`password`) VALUES (?)";
    const userExist = "SELECT username FROM login WHERE `username`= ?";

    const values = [
        req.body.userName,
        req.body.email,
        req.body.password
    ]

    db.query(userExist, [req.body.userName], (err,result) => {
        if(err){return res.json("Error")}

        if(result.length > 0){
            return res.json("User already exists")
        }
        
        db.query(sql,[values],(err,data) => {
            if(err) {
                return res.json("Error");
            }
            return res.json(data)
        })
        
    })
})

app.post('/login', (req,res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ? AND `username` = ?" ;


    db.query(sql,[req.body.email, req.body.password, req.body.userName],(err,data) => {
        if(err) {
            return res.json("Error");
        } 
        if(data.length > 0){
            return res.json("Successful Login")
        } else {
            return res.json("User does not exist")
        }
    })
})

app.listen(8806, ()=> {
    console.log("successful connection to database")
})

