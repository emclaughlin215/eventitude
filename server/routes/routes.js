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

app.get('/users/get', function(req, res) {
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

app.get('/users/create', function(req, res) {
  connection.getConnection(function(err, conn) {
    if (err) {
      throw err;
    }
    const username = req.query.username;
    const email = req.query.email;

    conn.query('SELECT * FROM users WHERE username=?', [username], function(error, results, fields) {
      if (err) {
        throw err;
      }
      if (results.length() !== 0) {
        res.send({ message: 'Username already exists. Pick a different username.' });
      }
    });

    conn.query('SELECT * FROM users WHERE email=?', [username], function(error, results, fields) {
      if (err) {
        throw err;
      }
      if (results.length() !== 0) {
        res.send({
          message: 'Email is already registered. If you have forgotten your password, please use login recovery.',
        });
      }
    });
  });
});

app.listen(3000, () => {
  console.log('Server Started');
});