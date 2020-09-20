import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import './TodoList.css';

//  todos props show todo items
const TodoList = ({ todos = [{ text: 'hello' }] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => <TodoListItem todo={todo} />)}
  </div>
);

export default TodoList;
