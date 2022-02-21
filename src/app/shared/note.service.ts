import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    new Note('Taxes 2022', 'Gather paper work for accountant'),
    new Note('South Africa 2023', 'Start savings account for trip'),
    new Note('Drink Water', 'Order a new water bottle from Amazon.com'),
  ];

  constructor() {}

  getNotes() {
    return [...this.notes];
  }

  getNote(id: string): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id);
    Object.assign(note, updatedFields);
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((n) => n.id !== id);
  }
}
