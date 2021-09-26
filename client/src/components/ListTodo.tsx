import React, { useState, useEffect } from 'react';

import { DeleteTodo } from './DeleteTodo';
import { TodoType } from '../types';
import { EditTodo } from './EditTodo';

export const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsondata = await response.json();
      setTodos(jsondata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos()
  }, []);

  return (
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: TodoType) => (
          <tr key={todo.id}>
            <td>{todo.description}</td>
            <td>
              <EditTodo todo={todo} />
            </td>
            <td>
              <DeleteTodo id={todo.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};