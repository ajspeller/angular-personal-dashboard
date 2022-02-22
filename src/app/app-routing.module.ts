import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNotesComponent } from './add-notes/add-notes.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNotesComponent, data: {}},
  { path: 'notes/:id', component: EditNoteComponent, data: {}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
