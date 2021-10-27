import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '@app/book-list/books.service';
import { AppState } from '@app/state/app.state';
import { addBook, removeBook, retrievedBookList } from '@app/state/books.actions';
import { selectBookCollection, selectBooks } from '@app/state/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'ng-starter-kit is running!';

  books$ = this.store.select<ReturnType<typeof selectBooks>>(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}
