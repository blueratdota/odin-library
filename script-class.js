(()=>{

    // FOR UI ////////////////////////////////////////////////////////
    const libraryContainer = document.querySelector('.library-container')
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    const submitBtn = document.querySelector('.submit-btn')
    const addTitle = document.querySelector('#title')
    const addAuthor = document.querySelector('#author')
    const addPages = document.querySelector('#pages')
    const addRead = document.querySelector('#read-status')   

    overlay.addEventListener('click',function(){
        toggleModal()
    })
    
    submitBtn.addEventListener('click',function(e){
        let readStatus = ''
        if (addRead.checked == true){
            readStatus = 'done'
        }
        else{
            readStatus = 'not done'
        }
        const newBook = new Book(`${addTitle.value}`,`${addAuthor.value}`,`${addPages.value}`,readStatus)
        newLibrary.addBookToLibrary(newBook)
        newLibrary.checkLibrary(newLibrary.myLibrary)
        toggleModal()
        clearAddForm()
        e.preventDefault();
    })

    function toggleModal(){
        modal.classList.toggle('hidden')
        overlay.classList.toggle('hidden')
    }
    
    function clearAddForm(){
        addTitle.value = ''
        addAuthor.value = ''
        addPages.value = ''
        addRead.checked = false
    }

    class Book{
        constructor(title,author,pages,status){
            this.title = title
            this.author = author
            this.pages = pages
            this.status = status
            this.added = ''
        }
    }
    
    class library{
        constructor(){
            this.myLibrary = []
        }
        addBookToLibrary(book){
            this.myLibrary.unshift(book)
        }
        checkLibrary(library){
            for (let i in library){
                
                console.log(`${i} === ${library[i].title}`);

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
                    bookPages.textContent = library[i].pages + ' pages'
        
                    const actions = document.createElement('div')
                    actions.classList.add("actions")
        
                    // READ BUTTON
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
                    removeBtn.addEventListener('click',function(){//to be fixed
                        libraryContainer.removeChild(bookTile)


                        console.log('THIS IS LIBRARY');
                        console.log(`removed ${library[i].title}`);
                        console.log(library.indexOf(library[i]));
                        library.splice(library.indexOf(library[i])+1,1)


                        console.log('AFTER REMOVE LIBRARY');
                        console.log(library);
        
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
            console.log(library)

        }
        addBookTile(){
            const bookTile = document.createElement('div')
            bookTile.classList.add('add-book', 'tile')
            const plusIcon = document.createElement('div')
            plusIcon.setAttribute('id','plus-icon')
            const plusImg = document.createElement('img')
            plusImg.setAttribute('id','plus-svg')
            plusImg.src = `assets/svg/plus-circle-outline.svg`
            const addBookTxt = document.createElement('div')
            addBookTxt.setAttribute('id','add-book-txt')
            addBookTxt.textContent = 'Add Book'
        
            plusIcon.appendChild(plusImg)
            bookTile.appendChild(plusIcon)
            bookTile.appendChild(addBookTxt)
            libraryContainer.appendChild(bookTile)
        
            bookTile.addEventListener('click',function(e){
                toggleModal()
            })
        }
    }
    
    // SAMPLE BOOKS ////////////////////////////////////////////////////////
    const jjk = new Book('Jujutsu Kaisen','Gege Akutami', 1000, 'not done')
    const got = new Book('A Song of Ice and Fire','George R.R. Martin',500,'done')
    const aot = new Book('Attack on Titan','Hajime Isayama',999,'not done')



    const newLibrary = new library()
    newLibrary.addBookTile()
    newLibrary.addBookToLibrary(jjk)
    newLibrary.addBookToLibrary(got)
    newLibrary.addBookToLibrary(aot)
    newLibrary.checkLibrary(newLibrary.myLibrary)

})()













