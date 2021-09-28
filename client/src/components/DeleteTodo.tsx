import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface DeleteProps {
  id: string
}

export const DeleteTodo = ({ id }: DeleteProps) => {
  const deleteTodo = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
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