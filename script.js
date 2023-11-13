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

// Create a book for test purposes
const dune = new Book('Dune', 'Lee Childs', 852, true);
const hobbit = new Book('The Hobbit', 'JRR Tolkien', 635, true);
const magician = new Book('The Magician', 'Dr. Chem,', 549, false);

// Create a library class with built in function for searching and updating the library
class Library {
    constructor() {
        this.books = [];
    }

    // Create function for adding book to library, function must check if book is already in library
    addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
        this.books.push(newBook);
        }
    }

    //Check if the book is in the library already
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
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

// Create the library to store all books
const library = new Library();


// Buttons
const addBookBtn = document.querySelector(".add-button");
const deleteAllBtn = document.querySelector(".delete");

// Element by ID
const inputForm = document.getElementById("pop-up");


// Create function for Add book button to display pop up form
const popUpForm = () => {
    inputForm.style.display = inputForm.style.display === 'none' ? '' : 'none';
}
addBookBtn.onclick = () => popUpForm();
