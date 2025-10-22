function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
}

const cardList = [
    { id: 1, title: 'lorem ipsum', tags: ['HTML', 'CSS', 'JavaScript'], thumbnail: 'https://picsum.photos/400/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

    { id: 2, title: 'lorem ipsum', tags: ['HTML', 'CSS'], thumbnail: 'https://picsum.photos/200/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

    { id: 3, title: 'lorem ipsum', tags: ['HTML', 'JavaScript'], thumbnail: 'https://picsum.photos/300/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

    { id: 4, title: 'lorem ipsum', tags: ['Python'], thumbnail: 'https://picsum.photos/300/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
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
                <li id="logo-text"><a href="#">Vibe Coding</a></li>
                <li id="logo-text"><a href="#">Development Log</a></li>
            </ul>
            <ul class="selectors">
                <li><label for="filter" class="hidden">Filter</label><select name="filter" id="filter">
                    <option value="default">Filter</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="misc">Misc</option>
                </select></li>
                <li><label for="sort" class="hidden">Sort</label><select name="sort" id="sort">
                    <option value="default-sort">Sort</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="alphabetical">Alphabetical Reverse</option>
                    <option value="date">Date</option>
                    <option value="date">Date Reverse</option>
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
            <a href="#">Vibe Coding</a>
            <a href="#">Development Log</a>
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

function sortCards() {
    // Get sort choice

    // Alphabetical

    // Alphabetical Reverse

    // Date

    // Date Reverse
}

const filterSelector = document.body.querySelector('#filter')
filterSelector.addEventListener('change', () => {
    function filterCards(selectorElement) {
        // Get filter choice
        filterChoice = selectorElement.value.toLowerCase()
        console.log(filterChoice)

        if (filterChoice !== 'default') {
            return cardList.filter(card => card.tags.includes(filterChoice))
        }
        else {
            return cardList
        }

    }

    const filteredCards = filterCards(filterSelector)

    function renderCards(cardsToDisplay) {
        const container = document.getElementById('card-container');
        // container.innerHTML = ''; // Clear existing cards

        if (cardsToDisplay) {
            cardsToDisplay.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.textContent = card.name;
                container.appendChild(cardElement);
            });
        }
    }
    renderCards(filteredCards)
})

function generateCardList() {
    cardList.forEach(item => {
        const cardContent = generateCard(item)
        const target = document.body.querySelector('.display')
        target.insertAdjacentHTML("beforeend", cardContent)
    })
}

// Call functions
generateCardList()
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