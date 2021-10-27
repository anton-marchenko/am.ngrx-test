import { Book } from '@app/book-list/books.model';

export interface AppState {
  books: Array<Book>;
  collection: Array<string>;
}
