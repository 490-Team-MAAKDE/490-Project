const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phase1',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

function initDatabase() {
  // Create tables and add example users if they don't exist
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      username VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255),
      firstName VARCHAR(255),
      lastName VARCHAR(255),
      password VARCHAR(255)
    );
  `;
  const createItemsTable = `
    CREATE TABLE IF NOT EXISTS items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255),
      title VARCHAR(255),
      description TEXT,
      category VARCHAR(255),
      price FLOAT,
      date DATE
    );
  `;
  const createReviewsTable = `
    CREATE TABLE IF NOT EXISTS reviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      item_id INT,
      rating VARCHAR(255),
      description TEXT
    );
  `;
  const exampleUsers = [
    ['user1', 'email1@gmail.com', 'first1', 'last1', 'password1'],
    ['user2', 'email2@gmail.com', 'first2', 'last2', 'password2'],
    ['user3', 'email3@gmail.com', 'first3', 'last3', 'password3'],
    ['user4', 'email4@gmail.com', 'first4', 'last4', 'password4'],
    ['user5', 'email5@gmail.com', 'first5', 'last5', 'password5'],
  ];

  db.query(createUsersTable, (err, result) => {
    if (err) throw err;
    console.log('Users table created');
  });
  db.query(createItemsTable, (err, result) => {
    if (err) throw err;
    console.log('Items table created');
  });
  db.query(createReviewsTable, (err, result) => {
    if (err) throw err;
    console.log('Reviews table created');
  });

  exampleUsers.forEach((user) => {
    const sql = 'INSERT IGNORE INTO users (username, email, firstName, lastName, password) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, user, (err, result) => {
      if (err) throw err;
    });
  });
}

// Routes

app.get('/', (req, res) => {
  res.render('signin');
});

// Add more routes for signin, signup, add_item, searchbar, etc.
app.get('/searchbar', (req, res) => {
    const sql = 'SELECT DISTINCT category FROM items';
    db.query(sql, (err, categories) => {
      if (err) throw err;
      res.render('searchbar', { categories });
    });
  });
  
  app.post('/search_items', (req, res) => {
    const { category } = req.body;
    const sql = 'SELECT * FROM items WHERE category = ?';
    db.query(sql, [category], (err, items) => {
      if (err) throw err;
      res.render('searchbar', { search_results: items });
    });
  });

// Initialize the database and start the server
initDatabase();
app.listen(3000, () => {
  console.log('Server started on port 3000...');
});