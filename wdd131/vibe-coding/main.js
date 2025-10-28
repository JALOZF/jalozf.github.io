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
                <li id="logo"><a href ="#">
                <?xml version="1.0" encoding="UTF-8"?>
                <svg id="a" data-name="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 308.96">
                <!-- <defs>
                    <style>
                    .f {
                        fill: #fff;
                    }

                    .g {
                        stroke: #000;
                        stroke-miterlimit: 10;
                    }
                    </style>
                </defs> -->
                <g id="b" data-name="Back">
                    <rect class="g" width="375" height="251.84" rx="15" ry="15"/>
                </g>
                <g id="c" data-name="Screen">
                    <rect class="f" x="16.22" y="16.18" width="342.52" height="183.56"/>
                </g>
                <g id="d" data-name="Code">
                    <rect class="g" x="51.06" y="32.15" width="236.31" height="14.63" rx="7.31" ry="7.31"/>
                    <path class="g" d="M90.63,65.47h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.31-7.32,7.31H90.63c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.31,7.32-7.31Z"/>
                    <path class="g" d="M58.38,96.92h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.31-7.32,7.31H58.38c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.31,7.32-7.31Z"/>
                    <path class="g" d="M58.38,130.44h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.32-7.32,7.32H58.38c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.32,7.32-7.32Z"/>
                    <path class="g" d="M90.63,161.9h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.32-7.32,7.32H90.63c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.32,7.32-7.32Z"/>
                </g>
                <g id="e" data-name="Base">
                    <g>
                    <rect class="g" x="102.15" y="287.75" width="170.7" height="21.2"/>
                    <path class="g" d="M102.15,308.95h-20.17c0-5.62,2.13-11.02,5.91-14.99,3.78-3.98,8.92-6.21,14.27-6.21v21.21h-.01Z"/>
                    <path class="g" d="M272.85,308.95v-21.21c5.52,0,10.81,2.38,14.62,6.59,3.57,3.94,5.56,9.18,5.56,14.62h-20.18Z"/>
                    </g>
                    <polygon class="g" points="145.06 280.97 227.53 280.97 219.88 256.53 153.04 256.53 145.06 280.97"/>
                    <g>
                    <rect class="f" x="147.04" y="218.37" width="80.92" height="19.62" rx="9" ry="9"/>
                    <path class="g" d="M156.14,223.94h62.73c2.34,0,4.24,1.9,4.24,4.24h0c0,2.34-1.9,4.24-4.24,4.24h-62.73c-2.34,0-4.24-1.9-4.24-4.24h0c0-2.34,1.9-4.24,4.24-4.24Z"/>
                    </g>
                </g>
                </svg></a></li>
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
            <a href="#" class="footer-logo-img">
            <?xml version="1.0" encoding="UTF-8"?>
                <svg id="a" data-name="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 308.96">
                <!-- <defs>
                    <style>
                    .f {
                        fill: #fff;
                    }

                    .g {
                        stroke: #000;
                        stroke-miterlimit: 10;
                    }
                    </style>
                </defs> -->
                <g id="b" data-name="Back">
                    <rect class="g" width="375" height="251.84" rx="15" ry="15"/>
                </g>
                <g id="c" data-name="Screen">
                    <rect class="f" x="16.22" y="16.18" width="342.52" height="183.56"/>
                </g>
                <g id="d" data-name="Code">
                    <rect class="g" x="51.06" y="32.15" width="236.31" height="14.63" rx="7.31" ry="7.31"/>
                    <path class="g" d="M90.63,65.47h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.31-7.32,7.31H90.63c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.31,7.32-7.31Z"/>
                    <path class="g" d="M58.38,96.92h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.31-7.32,7.31H58.38c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.31,7.32-7.31Z"/>
                    <path class="g" d="M58.38,130.44h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.32-7.32,7.32H58.38c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.32,7.32-7.32Z"/>
                    <path class="g" d="M90.63,161.9h221.67c4.04,0,7.32,3.28,7.32,7.32h0c0,4.04-3.28,7.32-7.32,7.32H90.63c-4.04,0-7.32-3.28-7.32-7.32h0c0-4.04,3.28-7.32,7.32-7.32Z"/>
                </g>
                <g id="e" data-name="Base">
                    <g>
                    <rect class="g" x="102.15" y="287.75" width="170.7" height="21.2"/>
                    <path class="g" d="M102.15,308.95h-20.17c0-5.62,2.13-11.02,5.91-14.99,3.78-3.98,8.92-6.21,14.27-6.21v21.21h-.01Z"/>
                    <path class="g" d="M272.85,308.95v-21.21c5.52,0,10.81,2.38,14.62,6.59,3.57,3.94,5.56,9.18,5.56,14.62h-20.18Z"/>
                    </g>
                    <polygon class="g" points="145.06 280.97 227.53 280.97 219.88 256.53 153.04 256.53 145.06 280.97"/>
                    <g>
                    <rect class="f" x="147.04" y="218.37" width="80.92" height="19.62" rx="9" ry="9"/>
                    <path class="g" d="M156.14,223.94h62.73c2.34,0,4.24,1.9,4.24,4.24h0c0,2.34-1.9,4.24-4.24,4.24h-62.73c-2.34,0-4.24-1.9-4.24-4.24h0c0-2.34,1.9-4.24,4.24-4.24Z"/>
                    </g>
                </g>
                </svg>
                </a>
            <a href="#" class="logo-text-one">Vibe Coding</a>
            <a href="#" class="logo-text-two">Development Log</a>
        </div>
        <div class="links">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" id="account-box">
            <path
                d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-46q-54-53-125.5-83.5T480-360q-83 0-154.5 30.5T200-246v46Z" />
        </svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" id="cloud">
            <path
                d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Z" />
        </svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" id="mail">
            <path
                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
        </svg></a>
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