import { addBook, removeBook } from '@app/state/books.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
