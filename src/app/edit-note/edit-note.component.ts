import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note!: Note | undefined;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.note = this.noteService.getNote(id);
    });
  }

  onDelete() {
    const id = this.note ? this.note.id : '';
    this.noteService.deleteNote(id);
    this.router.navigate(['notes']);
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const id = this.note ? this.note.id : '';
    this.noteService.updateNote(id, form.value);
    this.router.navigate(['notes']);
  }
}
