import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    new Todo('todo 1'),
    new Todo('todo 2'),
    new Todo('todo 3'),
    new Todo('todo 4'),
  ];
  constructor() {}

  getTodos() {
    return [...this.todos];
  }

  getTodo(id: string | null): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedFields);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
