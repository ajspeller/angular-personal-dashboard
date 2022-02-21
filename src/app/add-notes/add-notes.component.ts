import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss'],
})
export class AddNotesComponent implements OnInit {
  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit({ value }: any) {
    const { title, content } = value;
    const note = new Note(title, content);
    this.noteService.addNote(note);
    this.router.navigate(['notes']);
  }
}
