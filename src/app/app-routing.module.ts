import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent, data: {} },
  { path: 'bookmarks/:id', component: AddBookmarkComponent, data: {} },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent, data: {} },
  { path: 'todos/:id', component: EditTodoComponent, data: {} },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNotesComponent, data: {} },
  { path: 'notes/:id', component: EditNoteComponent, data: {} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
