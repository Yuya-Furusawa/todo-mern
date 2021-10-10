import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { APIContext } from '../context';
import { TodoType } from '../types';

type EditType = {
  todo: TodoType
}

export const EditTodo = ({ todo }: EditType) => {
  const [description, setDescription] = useState<string>("");
  const API_URL = useContext(APIContext);

  const updateDescription = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { description: description };
      await fetch(`${API_URL}/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <EditButton
        type="button"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </EditButton>

      <div
        className="modal container"
        id={`id${todo.id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-daialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <EditButton
                type="button"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </EditButton>
              <DeleteButton
                type="button"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </DeleteButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EditButton = styled.button`
  ${tw`
    w-auto
    pl-3
    pr-3
    pt-1.5
    pb-1.5
    rounded-sm
    text-base
    text-gray-500
    font-semibold
    bg-yellow-300
  `}
`;

const DeleteButton = styled.button`
  ${tw`
    w-auto
    pl-3
    pr-3
    pt-1.5
    pb-1.5
    rounded-sm
    text-base
    text-white
    font-semibold
    bg-red-500
  `}
`;