console.log('hello world - odin library');

const libraryContainer = document.querySelector('.library-container')
let myLibrary = []

function Book(title,author,pages,status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.added = ''
}

function addBookToLibrary(constBook){
    myLibrary.unshift(constBook)
}

// =====ADDED THIS FUNCTION TO THE BUTTON CREATION ITSELF=====
// function addBtnFunction(){
//     for(let i=0; i<statusButton.length; i++){
//         statusButton[i].addEventListener('click',function(e){
//             // console.log(statusButton[i].textContent);
//             if(statusButton[i].textContent == "Read"){
//                 statusButton[i].textContent = "Not Read"
//                 statusButton[i].classList.add("not-read")
//                 statusButton[i].classList.remove("read")
//             }
//             else if(statusButton[i].textContent == "Not Read"){
//                 statusButton[i].textContent = "Read"
//                 statusButton[i].classList.add("read")
//                 statusButton[i].classList.remove("not-read")
//             }
//         })
       
//     }
//     for (let i=0; i<removeButton.length; i++){
//         removeButton[i].addEventListener('click', function(e){
//             console.log(e);
//         })
//     }
// }

function clearLibrary(){
    for (let i in library){
        
    }
}

let statusButton =''
let removeButton =''

function checkLibrary(library){
    for (let i in library){
        console.log(library[i].title);
        console.log(library[i].author);
        console.log(library[i].pages);
        console.log(library[i].status);
        console.log(library[i].added);
        console.log('=====end=====');

        if(library[i].added!='added'){
            library[i].added = 'added'
            const bookTile = document.createElement('div')
            bookTile.classList.add('book', 'tile')
            const description = document.createElement('div')
            description.classList.add("description")
            const bookTitle = document.createElement('h2')
            bookTitle.textContent = library[i].title
            const bookAuthor = document.createElement('h3')
            bookAuthor.textContent = library[i].author
            const bookPages = document.createElement('p')
            bookPages.textContent = library[i].pages

            const actions = document.createElement('div')
            description.classList.add("actions")

            // ADD BUTTON
            const statusBtn = document.createElement('button')
            statusBtn.classList.add("status-btn")
            if (library[i].status == 'done'){
                statusBtn.textContent = 'Not Read'
                statusBtn.classList.add("not-read")
            }
            else{
                statusBtn.textContent = 'Read'
                statusBtn.classList.add("read")
            }
            statusBtn.addEventListener('click',function(){
                if(statusBtn.textContent == "Read"){
                    statusBtn.textContent = "Not Read"
                    statusBtn.classList.add("not-read")
                    statusBtn.classList.remove("read")
                }
                else if(statusBtn.textContent == "Not Read"){
                    statusBtn.textContent = "Read"
                    statusBtn.classList.add("read")
                    statusBtn.classList.remove("not-read")
                }
            })



            // REMOVE BUTTON
            const removeBtn = document.createElement('button')
            removeBtn.classList.add("remove-btn")
            removeBtn.textContent = 'Remove'
            removeBtn.addEventListener('click',function(){
                libraryContainer.removeChild(bookTile)
                // let index = library.indexOf(library[i])
                myLibrary.splice(library.indexOf(library[i]),1)
                console.log(library);
                // console.log(library.indexOf(library[i]));

            })

            description.appendChild(bookTitle)
            description.appendChild(bookAuthor)
            description.appendChild(bookPages)
            actions.appendChild(statusBtn)
            actions.appendChild(removeBtn)

            libraryContainer.insertBefore(bookTile,libraryContainer.children[0])
            bookTile.appendChild(description)
            bookTile.appendChild(actions)
        }   
    }
    // statusButton = document.querySelectorAll('.status-btn')
    // removeButton = document.querySelectorAll('.remove-btn')
    // addBtnFunction()
    console.log(library)
    
}

function addBookTile(){
    const bookTile = document.createElement('div')
    bookTile.classList.add('add-book', 'tile')
    const addBookBtn = document.createElement('button')
    addBookBtn.classList.add("add-new-book")
    addBookBtn.textContent = "Add New Book"

    libraryContainer.appendChild(bookTile)
    bookTile.appendChild(addBookBtn)
}


const jjk = new Book('Jujutsu Kaisen','Gege', 200, 'done')
const got = new Book('Game of Thrones','Jon Snow',600,'not done')
const aot = new Book('Attack on Titan','Eren',150,'not done')
const aots2 = new Book('Attack on Titan Season 2','Eren',150,'not done')


checkLibrary(myLibrary)
addBookTile()
addBookToLibrary(jjk)
addBookToLibrary(got)
addBookToLibrary(aot)
addBookToLibrary(aots2)
checkLibrary(myLibrary)






// for (let i in myLibrary){
//     console.log(myLibrary[i].author);
// }