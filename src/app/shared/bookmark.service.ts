import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Bookmark[] = [];

  constructor() {}

  getBookmarks(): Bookmark[] {
    return [...this.bookmarks];
  }

  getBookmark(id: string): Bookmark | undefined {
    return this.bookmarks.find((b) => id === b.id);
  }

  addBookmark(bookmark: Bookmark): void {
    this.bookmarks.push(bookmark);
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    Object.assign(bookmark, updatedFields)
  }

  deleteBookmark(id: string) {
    this.bookmarks = this.bookmarks.filter((b) => b.id === id);
  }
}
