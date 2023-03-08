const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require ("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "dbeyecandy",
    }
);
app.post("/register", (req, res) =>{

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO customer (firstname, lastname, email, username, password) VALUES (?,?,?,?,?)",
        [firstname, lastname, email, username, password],
        (err, result) => {
            console.log(err);
        }
    );
});


app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM customer WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

                if (result.length > 0 ) {
                    res.send(result);
                }
                else {
                    res.send( {
                        message: "Wrong username or password. Try again"
                    });
                }
            
            console.log(err);
        }
    );
});


app.listen(3001, () =>{
        console.log("running on port 3001");
    }
);