export class BookModel {
  constructor(title = '', author = '', pages = '', imageSrc = '') {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.imageSrc = imageSrc;
  }
}
