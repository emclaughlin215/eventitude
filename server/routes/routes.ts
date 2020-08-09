import { Request, Response } from 'express';
import express from 'express';
const mysql = require('mysql2');
const env = require('../../.env');

const connection = mysql.createPool({
  host: 'localhost',
  user: env.db.db_root_user,
  password: env.db.db_root_password,
  database: env.db.db_name,
});

const app = express();

app.get('/users/get', function(req: Request, res: Response) {
  connection.getConnection(function(err: any, conn: any) {
    if (err) {
      connection.release();
      throw err;
    }
    const username = req.query.username;
    conn.query('SELECT * FROM users WHERE username=?', [username], function(error: any, results: any, _fields: any) {
      if (err) {
        throw err;
      }
      res.send(results);
    });
  });
});

app.get('/users/create', function(req: Request, res: Response) {
  connection.getConnection(function(err: any, conn: any) {
    if (err) {
      throw err;
    }
    const username = req.query.username;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const email = req.query.email;

    conn.query('SELECT * FROM users WHERE username=?', [username], function(error: any, results: any, _fields: any) {
      if (err) {
        throw err;
      }
      if (results.length() !== 0) {
        res.send({ message: 'Username already exists. Pick a different username.' });
      }
    });

    conn.query('SELECT * FROM users WHERE email=?', [username], function(error: any, results: any, _fields: any) {
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
