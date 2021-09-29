import express from 'express';
import cors from 'cors';
import { Express, Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { pool } from './db';

const app: Express = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //req.body

//Route

//create a todo
app.post("/todos", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const resp = await pool.promise().query<RowDataPacket[]>(
      'INSERT INTO todo (description) VALUES (?)',
      [description]
    );
    res.json(resp[0]);
  } catch (error) {
    throw error;
  }
});

//get all todos
app.get("/todos", async (req: Request, res: Response) => {
  try{
    const resp = await pool.promise().query<RowDataPacket[]>(
      'SELECT * FROM todo'
    );
    res.json(resp[0]);
  } catch (error) {
    throw error;
  }
});

//get a todo
app.get("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await pool.promise().query<RowDataPacket[]>(
      'SELECT * FROM todo WHERE id = (?)',
      [id]
    );
    res.json(resp[0]);
  } catch (error) {
    throw error;
  }
});

//update a todo
app.put("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const resp = await pool.promise().query<RowDataPacket[]>(
      'UPDATE todo SET description = (?) WHERE id = (?)',
      [description, id]
    );
    res.json(resp[0]);
  } catch (error) {
    throw error;
  }
});

//delete a todo
app.delete("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await pool.promise().query<RowDataPacket[]>(
      'DELETE FROM todo WHERE id = (?)',
      [id]
    );
    res.json(resp[0]);
  } catch (error) {
    throw error;
  }
});


app.listen(PORT, () => {
  console.log("Server has started on PORT: ", PORT);
});