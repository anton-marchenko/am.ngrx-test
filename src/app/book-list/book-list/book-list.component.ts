import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@app/book-list/books.model';

@Component({
  selector: 'am-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  @Input() books: Array<Book> = [];
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
