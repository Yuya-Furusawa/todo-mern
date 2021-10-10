import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { APIContext } from '../context';
import { DeleteTodo } from './DeleteTodo';
import { TodoType } from '../types';
import { EditTodo } from './EditTodo';

export const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const API_URL = useContext(APIContext);

  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`);
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
    <ListTable>
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
    </ListTable>
  );
};

const ListTable = styled.table`
  ${tw`
    mt-12
    table
    text-center
    w-full
    mb-5
  `}

  td, th {
    ${tw`
      p-3
      border-t
      border-solid
      border-gray-300
    `}
  }

`;