const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const env = require('../../.env');

const connection = mysql.createPool({
  host: 'localhost',
  user: env.db.db_root_user,
  password: env.db.db_root_password,
  database: env.db.db_name,
});

const app = express();

app.get('/users', function(req, res) {
  connection.getConnection(function(err, conn) {
    if (err) {
      throw err;
    }
    const username = req.query.username;
    conn.query('SELECT * FROM users WHERE username=?', [username], function(error, results, fields) {
      if (err) {
        throw err;
      }
      res.send(results);
    });
  });
});

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/users so you can see the data.');
});
