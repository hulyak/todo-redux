import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { markTodoAsCompleted } from '../../actions';

import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import './TodoList.css';

import { loadTodos, removeTodoRequest, markTodoRequest } from '../../thunks';
import {
  // getTodos,
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from '../../selectors';

//  todos props show todo items

const TodoList = ({
  // todos = [],
  completedTodos,
  incompleteTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadingMessage = <div>Loading TODOS ...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Incompleted: </h3>
      {incompleteTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  // todos: state.todos,
  // isLoading: state.isLoading,
  // selectors
  isLoading: getTodosLoading(state),
  // todos: getTodos(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  // THUNKS instead of actions
  onCompletedPressed: (id) => dispatch(markTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
