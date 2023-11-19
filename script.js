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
const addToLibrary = document.getElementById("addBtn");

// Element by ID
const inputForm = document.getElementById("pop-up");


// Create function for Add book button to display pop up form
const popUpForm = () => {
    inputForm.style.display = inputForm.style.display === 'none' ? '' : 'none';
}
// addBookBtn.onclick = () => popUpForm();

//Open the modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.btn-close')

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

addBookBtn.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModalBtn.addEventListener("click", closeModal);
addToLibrary.addEventListener("click", closeModal);

// Create a function that stores the textbox from title as the name of the book to run in the \
//library.addbook function 

const storeDetails = () => {
    const formTitle = document.getElementById("book-title").value;
    const formAuthor = document.getElementById("author-name").value;
    const formPages = document.getElementById("num-of-pages").value;
    const formRead = document.getElementById("checkBox").checked;
    return new Book(formTitle, formAuthor, formPages, formRead);
}

// Function to clear the form after a book has been added
const clearForm = () => document.getElementById("form").reset();






// Next a function must create and populate the bookcard

const carousel = document.querySelector(".carousel");

const createBookCard = (book) => {
    const bookCover = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    bookCover.classList.add("book-cover");
    readBtn.classList.add("btn");
    removeBtn.classList.add("btn");
    // Must first create the function that will change the isRead statement
    // removeBtn.onclick = removeBook;


    // Set the divs created above to the correct text content from the inputs
    
    title.textContent = `${book.title}`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    removeBtn.textContent = 'Remove';


    // Append to the bookcover and carousel
    bookCover.appendChild(title);
    bookCover.appendChild(author);
    bookCover.appendChild(pages);
    bookCover.appendChild(readBtn);
    bookCover.appendChild(removeBtn);
    carousel.appendChild(bookCover);
    

}


//Add to library and carousel
const newToLibrary = () => {
    const newBook = storeDetails();
    library.addBook(newBook);
    clearForm();

    createBookCard(newBook);

}
addToLibrary.addEventListener("click", newToLibrary );