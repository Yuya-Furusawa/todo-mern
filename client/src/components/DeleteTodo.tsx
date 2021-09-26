import React from 'react';

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
    <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
      Delete
    </button>
  );
};