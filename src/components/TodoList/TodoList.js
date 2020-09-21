import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions';
import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import './TodoList.css';

//  todos props show todo items
const TodoList = ({ todos = [], onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) => (
      <TodoListItem key={i} todo={todo} onRemovePressed={onRemovePressed} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
