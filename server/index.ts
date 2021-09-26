import { Express, Request, Response } from 'express';
import { QueryError, RowDataPacket } from 'mysql2';
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app: Express = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

//Route

//create a todo
app.post("/todos", async (req: Request, res: Response) => {
  const { description } = req.body;
  await pool.promise().query(
    'INSERT INTO todo (description) VALUES (?)',
    [description]
  )
  .then((rows: RowDataPacket[]) => {
    console.log(rows);
    res.json(rows[0]);
  })
  .catch((error: QueryError) => {
    throw error;
  });
});

//get all todos
app.get("/todos", async (req: Request, res: Response) => {
  await pool.promise().query(
    'SELECT * FROM todo'
  )
  .then((rows: RowDataPacket[]) => {
    console.log(rows[0]);
    res.json(rows[0]);
  })
  .catch((error: QueryError) => {
    throw error;
  })
});

//get a todo
app.get("/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.promise().query(
    'SELECT * FROM todo WHERE id = (?)',
    [id]
  )
  .then((rows: RowDataPacket[]) => {
    console.log(rows);
    res.json(rows[0]);
  })
  .catch((error: QueryError) => {
    throw error;
  })
});

//update a todo
app.put("/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;
  await pool.promise().query(
    'UPDATE todo SET description = (?) WHERE id = (?)',
    [description, id]
  )
  .then((rows: RowDataPacket[]) => {
    console.log(rows);
    res.json(rows[0]);
  })
  .catch((error: QueryError) => {
    throw error;
  });
});

//delete a todo
app.delete("/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.promise().query(
    'DELETE FROM todo WHERE id = (?)',
    [id]
  )
  .then((rows: RowDataPacket[]) => {
    console.log(rows);
    res.json(rows[0]);
  })
  .catch((error: QueryError) => {
    throw error;
  })
});


app.listen(PORT, () => {
  console.log("Server has started on PORT: ", PORT);
});