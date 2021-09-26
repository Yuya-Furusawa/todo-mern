import React, { useState } from 'react';

import { TodoType } from '../types';

type EditType = {
  todo: TodoType
}

export const EditTodo = ({ todo }: EditType) => {
  const [description, setDescription] = useState<string>("");

  const updateDescription = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { description: description };
      await fetch(`http://localhost:5000/todos/${todo.id}`, {
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
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>

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
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};