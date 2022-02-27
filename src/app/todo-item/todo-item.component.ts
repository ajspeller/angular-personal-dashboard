import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() editClick = new EventEmitter<void>();
  @Output() deleteClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onEdit() {
    this.editClick.emit();
  }

  onDelete() {
    this.deleteClick.emit();
  }
}
