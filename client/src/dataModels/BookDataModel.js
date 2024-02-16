export class BookObj {
  constructor(title = '', author = '', pages = '', imageSrc = '') {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.imageSrc = imageSrc;
  }
}

// export class BookStorage {
//   constructor() {
//     this.books = [];
//   }

//   addBook(newBook) {
//     if (!this.hasBook(newBook)) {
//       this.books.push(newBook);
//       // Add new book to localStorage with key as <title-author>
//       localStorage.setItem(
//         newBook.title.concat('-', newBook.title),
//         JSON.stringify(newBook)
//       );
//     }
//   }

//   removeBook(title, author) {
//     this.books = this.books.filter(
//       (book) => book.title !== title && book.author !== author
//     );
//   }

//   getBook(title, author) {
//     return this.books.find(
//       (book) => book.title === title && book.author === author
//     );
//   }

//   hasBook(newBook) {
//     return this.books.some(
//       (book) => book.title === newBook.title && book.author === newBook.author
//     );
//   }
// }
