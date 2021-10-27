import { Book } from '@app/book-list/books.model';
import { retrievedBookList } from '@app/state/books.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
