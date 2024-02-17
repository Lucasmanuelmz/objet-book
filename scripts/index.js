let formDialog = document.querySelector('#form-dialog');
let cancelButton = document.querySelector('#cancel');
let dialogButton = document.querySelector('#menu-button');
let button = document.querySelector('#add-book');
let table = document.querySelector('table');

dialogButton.addEventListener('click', () => {
    formDialog.showModal();
})

cancelButton.addEventListener('click', () => {
    formDialog.close();
})

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.Library = function() {
    
    myLibrary.push(this);

    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr')
    tbody.appendChild(tr);
    let tdTitle = document.createElement('td');
    tdTitle.textContent = this.title;
    tr.appendChild(tdTitle)
    let tdAuthor = document.createElement('td');
    tdAuthor.textContent = this.author;
    tr.appendChild(tdAuthor);
    let tdPages = document.createElement('td');
    tdPages.textContent= this.pages
    tr.appendChild(tdPages);
    let tdRead = document.createElement('td');
    tdRead.textContent = this.read;
    tr.appendChild(tdRead);

    let tdDelete = document.createElement('td');
    let deleteButton = document.createElement('button');
    tdDelete.appendChild(deleteButton);
    deleteButton.classList.add('delete');
    deleteButton.innerHTML= `<img src="./assets-icon/icons/delete-custom.png"/>`;
    deleteButton.title = 'Click do delete';
    tr.appendChild(tdDelete);
    deleteButton.style.cssText = `
    font-size: 14px; 
    border-radius: 4px;
    padding: 2px;
    width: max-content;
    height: fit-content;
    margin: 0 auto;
    box-shadow: 1px 1px 1px #ddd;`;

    function deleteItem() {
        tr.parentNode.removeChild(tr);
    }

    deleteButton.addEventListener('click', deleteItem);

    return myLibrary;
}
 
    let thead = document.querySelector('thead');
    let trhead = document.createElement('tr');
    thead.appendChild(trhead);
    let th = document.createElement('th');
    th.classList.add('title');
    trhead.appendChild(th);
    th.textContent='Title of Book';
    let thAutor = document.createElement('th');
    thAutor.textContent = 'Author';
    trhead.appendChild(thAutor);
    let thPages = document.createElement('th');
    thPages.textContent = 'Pages';
    thPages.classList.add('pages');
    trhead.appendChild(thPages);
    let thRead = document.createElement('th');
    thRead.textContent = 'Reading?';
    thRead.classList.add('check');
    trhead.appendChild(thRead);


function addBookToLibrary() {

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked? 'Yes':'No';
    let p = document.querySelector('p');

    if(title !== '' && isNaN(title) 
    && author !== '' && isNaN(author)
    && pages !== '' && !isNaN(pages) ) {
    const myBook = new Book(title, author, pages, read);
    myBook.Library()

    table.style.display = 'table';
    } else { 
        if(title === '' || !isNaN(title)) {
            p.textContent = 'Fill in the title with text and do not use numbers!';
            p.style.color = '#f00';
            p.style.backgroundColor = '#ddc9c9';
            p.style.padding = '5px';
        } else if(author === '' || !isNaN(author)) {
            p.textContent = 'The author field must be filled with text!';
            p.style.color = '#f00'
            p.style.backgroundColor = '#ddc9c9';
            p.style.padding = '5px';
        } else if(pages === '' || isNaN(pages)) {
            p.textContent = 'Fill in pages with a valid number!';
            p.style.color = '#f00';
            p.style.backgroundColor = '#ddc9c9';
            p.style.padding = '5px';
        } else {
            p.textContent = 'Serious error! Report this error.';
            p.style.color = '#f00';
            p.style.backgroundColor = '#ddc9c9';
            p.style.padding = '5px';
        }
    }
    
}

button.addEventListener('click', addBookToLibrary);

