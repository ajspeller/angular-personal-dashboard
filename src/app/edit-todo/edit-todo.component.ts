import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  todo!: Todo | undefined;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.todo = this.todoService.getTodo(id);
    });
  }

  onDelete() {
    const id = this.todo ? this.todo.id : '';
    this.todoService.deleteTodo(id);
    this.router.navigate(['todos']);
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const id = this.todo ? this.todo.id : '';
    this.todoService.updateTodo(id, form.value);
    this.router.navigate(['todos']);
  }
}
