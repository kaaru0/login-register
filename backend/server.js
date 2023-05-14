const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req,res) => {
    const sql = "INSERT INTO login ('name','email','password') VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
})

app.listen(8081, ()=> {
    console.log("successful connection to database")
})

