import React, { useState } from 'react';
import { connect } from 'react-redux';

// import { createTodo } from '../../actions';
import { addTodoRequest } from '../../thunks';
import { getTodos } from '../../selectors';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your new todo here"
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue(''); // clear input
          }
        }}>
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // todos: state.todos,
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  // onCreatePressed: (text) => dispatch(createTodo(text)),
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

//  higher order function
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
