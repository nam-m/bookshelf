export class ShelfModel {
  constructor(id = '', name = '', isEditing = false, books = []) {
    this.id = id;
    this.name = name;
    this.isEditing = isEditing;
    this.books = books;
  }
}
