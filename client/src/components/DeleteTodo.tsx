import React, { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { APIContext } from '../context';

interface DeleteProps {
  id: string
}

export const DeleteTodo = ({ id }: DeleteProps) => {
  const API_URL = useContext(APIContext);

  const deleteTodo = async (id: string) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE"
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DeleteButton onClick={() => deleteTodo(id)}>
      Delete
    </DeleteButton>
  );
};

const DeleteButton = styled.button`
  ${tw`
    w-auto
    pl-2
    pr-2
    pt-1.5
    pb-1.5
    rounded-sm
    text-base
    text-white
    font-semibold
    bg-red-500
  `}
`;