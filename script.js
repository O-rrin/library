'use strict'




// Create the 'book' object constructor
class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = 0,
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

}


// Create a library class with built in function for searching and updating the library
class Library {
    constructor() {
        this.books = [];
    }

    // Create function for adding book to library, function must check if book is already in library
    addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
        this.myLibrary.push(newBook);
        }
    }

    //Check if the book is in the library already
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === title);
    }

    // Create function to remove a book from the library
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }

    // Locate and retrieve a book based on title.
    findBook(title) {
         return this.books.find((book) => book.title === title);
    }



}


const dune = new Book('Dune', 'Lee Childs', 852, true)