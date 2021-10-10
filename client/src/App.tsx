import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';

import { APIContext } from './context';
import { InputTodo } from './components/InputTodo';
import { ListTodo } from './components/ListTodo';

function App() {
  //localで立ち上げる場合にはdocker使おうがhost名はlocalhost
  //どこかにデプロイした場合はhost名が異なるので
  //その場合useContextを使ってAPIをスイッチする
  const API_URL = 'http://localhost:5000';

  return (
    <APIContext.Provider value={API_URL}>
      <Container>
        <InputTodo />
        <ListTodo />
      </Container>
    </APIContext.Provider>
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
