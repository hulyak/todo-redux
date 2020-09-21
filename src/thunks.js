import {
  loadTodosFailure,
  loadTodosSuccess,
  loadTodosInProgress,
} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (err) {
    dispatch(loadTodosFailure);
    dispatch(displayAlert(e));
  }
};

export const displayAlert = () => () => {
  alert(text);
};
