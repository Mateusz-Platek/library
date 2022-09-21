let books = [];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let addBook = document.querySelector('.addBook');
let form = document.querySelector('form');
let close = document.querySelector('.close');
let add = document.querySelector('.add');

addBook.addEventListener('click', () => {
    form.classList.remove('hidden');
});

close.addEventListener('click', () => {
    closeFun();
});

let title = document.querySelector('input[id="title"]');
let author = document.querySelector('input[id="author"]');
let pages = document.querySelector('input[id="pages"]');
let read = document.querySelector('.white');

read.addEventListener('click', () => {
    if(read.textContent == 'Read') {
        read.textContent = 'Not read';
    } else {
        read.textContent = 'Read';
    }
});

function closeFun() {
    form.classList.add('hidden');
    title.value = '';
    author.value = '';
    pages.value = '';
    read.textContent = 'Read';
}

function addBookToList() {
    let titleValue = title.value;
    let authorValue = author.value;
    let pagesValue = pages.value;
    let readValue = read.textContent;

    let book;
    if(readValue == 'Read') {
        book = new Book(titleValue, authorValue, pagesValue, true);
    } else {
        book = new Book(titleValue, authorValue, pagesValue, false);
    }
    books.push(book);
}

let main = document.querySelector('.main');

function printBooks() {
    main.textContent = '';
    for(let i = 0; i < books.length; i++) {    
        let card = document.createElement('div');
        card.setAttribute('data', `${i}`);
        let titleDiv = document.createElement('div')
        titleDiv.textContent = books[i].title;
        card.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        authorDiv.textContent = books[i].author;
        card.appendChild(authorDiv);
        let pagesDiv = document.createElement('div');
        pagesDiv.textContent = books[i].pages + ' pages';
        card.appendChild(pagesDiv);
        let readButton = document.createElement('button');
        if(books[i].read == true) {
            readButton.textContent = 'Read';
        } else {
            readButton.textContent = 'Not read';
        }
        readButton.addEventListener('click', () => {
            let changeRead = card.getAttribute('data');
            console.log(books[changeRead].read);
            if(books[changeRead].read == true) {
                books[changeRead].read = false;
            } else {
                books[changeRead].read = true;
            }
            printBooks();
        })
        card.appendChild(readButton);
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            let removeObj = card.getAttribute('data');
            books.splice(removeObj, 1);
            printBooks();
        });
        card.appendChild(removeButton);
        card.classList.add('book');
        main.appendChild(card);
    }
}

add.addEventListener('click', () => {
    addBookToList();
    printBooks();
    closeFun();
});