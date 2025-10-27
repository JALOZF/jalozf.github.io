function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
}

function cleanLocalStorage(key) {
    localStorage.removeItem(key)
}
cleanLocalStorage('filter')

const cardList = [
    { id: 1, title: `Python Dictionaries`, tags: ['HTML', 'CSS', 'JavaScript'], thumbnail: 'https://picsum.photos/400/300', description: `Python dictionaries are a powerful, built-in data structure that stores data as key-value pairs. They are unordered (in Python versions before 3.7) or insertion-ordered (Python 3.7+), mutable, and highly optimized for retrieving values quickly using their unique keys. They're commonly used to represent real- world entities, like a person's attributes (name: 'Alice', age: 30), or to map one set of data to another.` },

    { id: 2, title: `What's the deal with JavaScript?`, tags: ['HTML', 'CSS'], thumbnail: 'https://picsum.photos/200/300', description: `JavaScript (JS) is a versatile, high-level, interpreted programming language primarily known as the language of the web, running natively in all major web browsers to create interactive and dynamic content. Beyond front-end web development, its popular runtime environment, Node.js, allows it to be used for server-side programming, enabling full-stack development using a single language.` },

    { id: 3, title: `Everything is Clickable`, tags: ['HTML', 'JavaScript'], thumbnail: 'https://picsum.photos/300/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

    { id: 4, title: `Making a Basic Game`, tags: ['Python'], thumbnail: 'https://picsum.photos/300/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]

lastPost = (cardList.length) - 1
setLocalStorage('temp-id', lastPost)

// Generate header and footer content
function generateHeader() {
    lastPost = getLocalStorage('temp-id')
    const headerContent = `<header>
        <nav>
            <ul class="logo">
                <li id="logo"><img src="/wdd131/vibe-coding/vibe-coding-resources/icons/icon.svg" alt="Logo" id="icon"></li>
                <li class="logo-text-one"><a href="#">Vibe Coding</a></li>
                <li class="logo-text-two"><a href="#">Development Log</a></li>
            </ul>
            <ul class="selectors">
                <li><label for="filter" class="hidden">Filter</label><select name="filter" id="filter">
                    <option value="default">Filter</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Misc">Misc</option>
                </select></li>
                <li><label for="sort" class="hidden">Sort</label><select name="sort" id="sort">
                    <option value="default-sort">Sort</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="alphabetical-reverse">Alphabetical Reverse</option>
                    <option value="date">Date</option>
                    <option value="date-reverse">Date Reverse</option>
                </select></li>
            </ul>
            <ul class="main-nav">
                <li><a href="./">Home</a></li>
                <li><a href="./about/">About</a></li>
                <li><a href="./blog/?id=${lastPost}">Newest</a></li>
            </ul>
        </nav>
    </header>`
    document.body.insertAdjacentHTML("afterbegin", headerContent)
}
generateHeader()


function generateFooter() {
    const footerContent = `<footer>
        <div class="footer-logo">
            <img src="/wdd131/vibe-coding/vibe-coding-resources/icons/icon.svg" alt="Logo">
            <a href="#" class="logo-text-one">Vibe Coding</a>
            <a href="#" class="logo-text-two">Development Log</a>
        </div>
        <div class="links">
            <a href="#"><img src="/wdd131/vibe-coding/vibe-coding-resources/icons/account_box.svg" alt="LinkedIn"></a>
            <a href="#"><img src="/wdd131/vibe-coding/vibe-coding-resources/icons/cloud.svg" alt="Github"></a>
            <a href="#"><img src="/wdd131/vibe-coding/vibe-coding-resources/icons/mail.svg" alt="Contact"></a>
        </div>
    </footer>`
    document.body.insertAdjacentHTML("beforeend", footerContent)
}

// Generate home page content

function generateCard(card) {
    const fullCardList = []

    // Generate list of tags for display (i.e. HTML, CSS, etc.)
    const tagList = card.tags
    const displayTags = tagList.join(', ')
    // convert tags to lowercase for the ids in the class tag (i.e. class="html css javascript") - ids are supposed to be unique, so everything will go in class
    let idTags = tagList.join(' ')
    idTags = idTags.toLowerCase()

    const cardTemplate = `<a href="blog/?id=${card.id}" class="invisible">
    <section class="card" id="${card.id}">
        <h2 class="title">${card.title}</h2>
        <h3 class="tags ${idTags}">${displayTags}</h3>
        <img src="${card.thumbnail}" alt="Placeholder" class="thumbnail">
        <span class="description">${card.description}</span>
    </section>
</a>`
    fullCardList.push(cardTemplate)
    return cardTemplate, fullCardList
}

// Include sortCards() and filterCards() before rendering the list of cards. 

const sortSelector = document.body.querySelector('#sort')
function sortCards(selectorElement) {
    // Get sort choice
    const sortChoice = selectorElement.value
    cleanLocalStorage('sort')
    // Alphabetical
    if (sortChoice == 'alphabetical') {
        cardList.sort((a, b) => a.title.localeCompare(b.title))
    }
    // Alphabetical Reverse
    if (sortChoice == 'alphabetical-reverse') {
        cardList.sort((a, b) => b.title.localeCompare(a.title))
    }
    // Date (Default)
    if (sortChoice == 'date' || sortChoice == 'default-sort') {
        cardList.sort((a, b) => a.id - b.id)
    }
    // Date Reverse
    if (sortChoice == 'date-reverse') {
        cardList.sort((a, b) => b.id - a.id)
    }

    filterCards(filterSelector)
}
sortSelector.addEventListener('change', () => {
    const sortedCards = sortCards(sortSelector)
})



const filterSelector = document.body.querySelector('#filter')
function filterCards(selectorElement) {
    // Get filter choice
    filterChoice = selectorElement.value
    cleanLocalStorage('filter')
    if (filterChoice != 'default') {
        setLocalStorage('filter', filterChoice)
        console.log(filterChoice)
        const filteredCards = cardList.filter(card => card.tags.includes(filterChoice))
        console.log(filteredCards)
        generateCardList(filteredCards)
    }
    else {
        console.log(cardList)
        generateCardList(cardList)
    }

}
filterSelector.addEventListener('change', () => {
    const filteredCards = filterCards(filterSelector)
})

function generateCardList(list) {
    const target = document.body.querySelector('.display')
    target.innerHTML = ''
    list.forEach(item => {
        const cardContent = generateCard(item)
        target.insertAdjacentHTML("beforeend", cardContent)
    })
}

// Call functions
sortCards(sortSelector)
generateFooter()




// You can only store items in localStorage as strings
// localStorage.setItem('name', 'Daniel Checketts')
// const myName = localStorage.getItem('name')
// console.log(myName)

// Send cards to localStorage
// setLocalStorage("cardList", cardList)
// Retrieve cards from localStorage don't forget the quotes for the key!
// storedCardList = getLocalStorage('cardList')
// console.log(storedCardList)

// All pages on the same host can access the LocalStorage!

// url.html?id=1234 <- Retrieve the id content: getParam('id')
function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}