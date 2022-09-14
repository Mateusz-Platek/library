let books = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    for(let i = 0; i < books.length; i++) {
        main.textContent = '';
        let div = document.createElement('div');
        let titleDiv = document.createElement('div')
        titleDiv.textContent = books[i].title;
        div.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        authorDiv.textContent = books[i].author;
        div.appendChild(authorDiv);
        main.appendChild(div);
    }
}

add.addEventListener('click', () => {
    addBookToList();
    //printBooks();
    closeFun();
});