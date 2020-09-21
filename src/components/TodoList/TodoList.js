import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { markTodoAsCompleted } from '../../actions';

import TodoListItem from '../TodoListItem/TodoListItem';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import './TodoList.css';

import { loadTodos, removeTodoRequest, markTodoRequest } from '../../thunks';

//  todos props show todo items

const TodoList = ({
  todos = [],
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
      {todos.map((todo, i) => (
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
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  // THUNKS
  onCompletedPressed: (id) => dispatch(markTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
