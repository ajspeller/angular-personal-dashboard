import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { text } = form.value;
    const todo = new Todo(text);
    this.todoService.addTodo(todo);
    this.router.navigate(['todos']);
  }
}
