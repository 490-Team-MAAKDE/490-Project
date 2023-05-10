/*Ensure you have npm installed 'express','mysql','cors',
'bcrypt','body-parser','cookie-parser','express-session'
in integrated terminal for: Eye Candy Project\Code Design\Front-End\eye-candy\src\Server*/
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

/*This establishes the connection with the localhost:3000
through GET and POST Methods with the SQL*/
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

/*This establishes the cookies to be stored on the webpage, this functionality
will be used to keep users logged on and prevent having to login again */
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "bingchilling",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24, // 24 hours
    },
  })
);

/*Establishes the connection between the page and SQL Database*/
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "dbeyecandy",
});

/*POST Functionality within the register page to store into SQL*/
app.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  /*Hash functionality to not store the hard values of user passwords*/
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    /*INSERT all collected date from register.js to SQL dbeyecandy */
    db.query(
      "INSERT INTO customer (firstname, lastname, email, username, password) VALUES (?,?,?,?,?)",
      [firstname, lastname, email, username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

/*GET functionality to grab all the available login credentials
from dbeyecandy  */
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

/*POST Functionality within the login page to send and compare
with the data from SQL [dbeyecandy.customer]*/
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM customer WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      //Login Successful
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          }
          //Login Failure
          else {
            res.send({
              message: "Wrong username or password. Try again",
            });
          }
        });
      }
      //User Does not Exist
      else {
        res.send({
          message: "User does not exist",
        });
      }

      console.log(err);
    }
  );
});

//Allows to search for users through DB on Search Page
app.get("/search/:query", (req, res) => {
  const searchTerm = req.params.query;
  const query = `SELECT * FROM customer WHERE username LIKE '%${searchTerm}%'`;

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error searching for customers." });
    } else {
      res.send(result);
    }
  });
});

app.get('/customers/:username', (req, res) => {
  const { username } = req.params;
  db.query(
    'SELECT firstname, lastname, email, username FROM customer WHERE username = ?',
    username,
    (err, result) => {
      if (err) {
        res.send({ err });
      } else if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: 'Customer not found' });
      }
    }
  );
});


/*Not really necessary, however still here to troubleshoot and see if
connection is not working.*/
app.listen(3001, () => {
  console.log("running on port 3001");
});
