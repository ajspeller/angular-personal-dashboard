import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    new Todo('this is a test'),
    new Todo(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero eveniet, iste atque optio laudantium, aut saepe explicabo reprehenderit enim, culpa distinctio aperiam vel sunt? Officia natus ipsa reprehenderit similique'
    ),
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
    this.getTodos();
  }
}
