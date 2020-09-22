import { createSelector } from 'reselect';

export const getTodos = (state) => state.todos.data;

export const getTodosLoading = (state) => state.todos.isLoading;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  // return value of selector
  todos.filter((todo) => !todo.isCompleted)
);

// getIncompleteTodos(state)

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
