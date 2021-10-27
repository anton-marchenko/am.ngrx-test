import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@app/book-list/books.model';

@Component({
  selector: 'am-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCollectionComponent implements OnInit {
  @Input() books: Array<Book> | null = [];
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
