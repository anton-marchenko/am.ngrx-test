import { isDefined } from '@angular/compiler/src/util';
import { Book } from '@app/book-list/books.model';
import { AppState } from '@app/state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: ReadonlyArray<Book>) => books
);

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>("collection");

export const isDefinedGeneric = <T>(x: T | undefined | null): x is T => {
  return x !== null && x !== undefined;
};

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: ReadonlyArray<Book>, collection: ReadonlyArray<string>) => {
    return collection.map((id) => books.find((book) => book.id === id)).filter(isDefinedGeneric);
  }
);
