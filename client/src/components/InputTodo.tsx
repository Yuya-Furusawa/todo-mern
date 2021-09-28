import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const InputTodo = () => {
  const [description, setDescription] = useState<string>("");

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body = { description: description };
      await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Title>MERN Todo List</Title>
      <TodoForm onSubmit={onSubmitForm}>
        <Wrapper>
          <TodoInput
            placeholder="What should I do"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <AddButton>Add</AddButton>
        </Wrapper>
      </TodoForm>
    </>
  );
};

const Title = styled.h1`
  ${tw`
    text-center
    text-gray-700
    text-4xl
    mt-8
  `}
`;

const TodoForm = styled.form`
  ${tw`
    mt-6
    flex
    justify-center
  `}
`;

const Wrapper = styled.div`
  ${tw`
    flex
    flex-row
    w-1/2
  `}
`;

const TodoInput = styled.input`
  ${tw`
    w-4/5
    h-auto
    border-solid
    border-2
    border-blue-500
    border-opacity-75
    rounded-md
    pl-2.5
  `}
`;

const AddButton = styled.button`
  ${tw`
    w-1/5
    ml-4
    pl-3
    pr-3
    pt-1.5
    pb-1.5
    rounded-md
    text-xl
    text-white
    font-bold
    bg-green-500
  `}
`;