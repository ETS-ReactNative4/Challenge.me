/* Run this to test if you are connected to the database or if it is currently active */
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "challenge-me.c8vwwyjvtpxs.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "challenge.me"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});