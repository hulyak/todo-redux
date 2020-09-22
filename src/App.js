import React from 'react';
import TodoList from './components/TodoList/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default App;
