import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos Selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      {
        text: 'Say hello',
        isCompleted: true,
      },
      {
        text: 'Say Goodbye',
        isCompleted: false,
      },
      {
        text: 'Climb Mount Everest',
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
    ];
    // resultFunc() comes from createSelector()
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  });
});
