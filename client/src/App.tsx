import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';

import { InputTodo } from './components/InputTodo';
import { ListTodo } from './components/ListTodo';

function App() {
  return (
    <Container>
      <InputTodo />
      <ListTodo />
    </Container>
  );
};

const Container = styled.div`
  ${tw`
    flex
    flex-col
    max-w-6xl
    w-full
    h-full
    mx-auto
    px-8
  `}
`;

export default App;
