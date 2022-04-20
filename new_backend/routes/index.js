var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const con = mysql.createConnection({
  host: "challenge-me.c8vwwyjvtpxs.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "challenge.me"
});

/* User API's 
1. Register a new user 
2. Get User information (login)
*/ 
app.post('/user', (req, res) => {
  if (req.query.first_name && req.query.username && req.query.last_name) {
      console.log('Request received');
      con.connect(function(err) {
          con.query(`INSERT INTO challengeme.user (first_name,last_name,username,gender,password_hash,points) VALUES ('${req.query.first_name}', '${req.query.last_name}', '${req.query.username}', '${req.query.gender}','${req.query.password_hash}','${req.query.points}')`, function(err, result, fields) {
              if (err) res.send(err);
              if (result) res.send({username: req.query.username, first_name: req.query.first_name, last_name: req.query.last_name});
              if (fields) console.log(fields);
          });
      });
  } else {
      console.log('Missing a parameter');
  }
});

app.get('/user', (req,res) => {
  if (req.query.username&& req.query.password_hash) {
    console.log('Request received');
  con.connect(function(err) {
    con.query(`SELECT * from challengeme.user where username = '${req.query.username}' and password_hash = '${req.query.password_hash}'`,function(err,result) {
      if (err) res.send(err);
      if (result) res.send(result)
    });
  });
}else {
  console.log('failed to get something or user does not exist');
}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports = router;
