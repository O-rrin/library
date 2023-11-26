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
// const dune = new Book('Dune', 'Lee Childs', 852, true);
// const hobbit = new Book('The Hobbit', 'JRR Tolkien', 635, true);
// const magician = new Book('The Magician', 'Dr. Chem,', 549, false);

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
// const popUpForm = () => {
//     inputForm.style.display = inputForm.style.display === 'none' ? '' : 'none';
// }
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

// closeModalBtn.addEventListener("click", closeModal);




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
    title.classList.add('text-of-book');
    author.classList.add('text-of-book');
    pages.classList.add('text-of-book');
    // Must first create the function that will change the isRead statement
    removeBtn.onclick = library.removeBook(book.title);


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

// Create a function that stores the textbox from title as the name of the book to run in the \
//library.addbook function 

const storeDetails = () => {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author-name").value;
    const pages = document.getElementById("num-of-pages").value;
    const isRead = document.getElementById("read").checked;
 
    
    // library.addBook(new Book(title, author, pages, isRead));
    return new Book(title, author, pages, isRead);
    
}


//Add to library and carousel
const newToLibrary = () => {
    const oneBook = storeDetails();
    
    // library.addBook(oneBook);
    
    
    closeModal();
    clearForm();

    createBookCard(oneBook);


    // console.log(oneBook);
    
    // console.log(typeof oneBook);

    return library.addBook(oneBook);


}
addToLibrary.addEventListener('click', newToLibrary);

// Link remove button to the class function



// The only explanation I have is that the modal is somehow interfering with the book being added to library
// I don't understand as the book is being created and returned, stored in a variable but its not being added to the library.
// Will have to try and remove the modal to see if this makes a difference.
// It's worth a try.

// I cant figure out what the fuck is going on. It's an object and has book inheritance but will not add to the library.
// Getting very close to copying my old code and going through to change the CSS.
// IT's baffling.

// So apparently setting the newToLibrary function to have a return of library.addbook() has fixed it.
// I truly don't understand how this makes a different and it's not how my prvious library app was coded.
// It works but I'd be lying if I said I understand why.