console.log('hello world - odin library');

const libraryContainer = document.querySelector('.library-container')

const myLibrary = []

function Book(title,author,pages,status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(constBook){
    myLibrary.push(constBook)
}

function checkLibrary(library){
    for (let i in library){
        console.log(myLibrary[i].title);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pages);
        console.log(myLibrary[i].status);
        console.log('=====end=====');
        const bookTile = document.createElement('div')
        bookTile.classList.add('book', 'tile')
        const description = document.createElement('div')
        description.classList.add("description")
        const bookTitle = document.createElement('h2')
        bookTitle.textContent = myLibrary[i].title
        const bookAuthor = document.createElement('h3')
        bookAuthor.textContent = myLibrary[i].author
        const bookPages = document.createElement('p')
        bookPages.textContent = myLibrary[i].pages

        const actions = document.createElement('div')
        description.classList.add("actions")
        const statusBtn = document.createElement('button')
        if (myLibrary[i].status == 'done'){
            statusBtn.textContent = 'Not Read'
        }
        else{
            statusBtn.textContent = 'Read'
        }
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'

        description.appendChild(bookTitle)
        description.appendChild(bookAuthor)
        description.appendChild(bookPages)
        actions.appendChild(statusBtn)
        actions.appendChild(removeBtn)

        libraryContainer.appendChild(bookTile)
        bookTile.appendChild(description)
        bookTile.appendChild(actions)
    }
}

const jjk = new Book('Jujutsu Kaisen','Gege', 200, 'done')
const got = new Book('Game of Thrones','Jon Snow',600,'not done')
const aot = new Book('Attack on Titan','Eren',150,'not done')

addBookToLibrary(jjk)
addBookToLibrary(got)
addBookToLibrary(aot)
console.log(myLibrary);

checkLibrary(myLibrary)

// for (let i in myLibrary){
//     console.log(myLibrary[i].author);
// }