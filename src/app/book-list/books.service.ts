import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mock } from '@app/book-list/books.mock';
import { Book } from '@app/book-list/books.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor() {}

  getBooks(): Observable<Array<Book>> {
    return of(mock).pipe(map((books) => books.items || []));
  }
}
