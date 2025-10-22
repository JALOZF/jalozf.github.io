function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
}

function getParam(param) {
    // url.html?id=1234 <- Retrieve the id content: getParam('id')
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
}


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

const posts = [
    {
        id: 0, 
        title: "Blog", 
        content: `<main>
        <h1>Title</h1>
        <span>Placeholder</span>
        <div class="image-container">
            <img src="#" alt="Placeholder">
        </div>
        <span>Placeholder</span>
        <pre><code>
            print('Hello World!')
        </code></pre>
        <span>Placeholder</span>
    </main>` 
    },
    {
        id: 1, 
        title: "What is a Python Dictionary?", content: `<main>
        <h1>What is a Python Dictionary?</h1>
        <span id="content-one">Dictionaries are one of Python's most flexible and frequently used built-in data
            structures. If you've ever dealt with a phone book, a real-life dictionary, or a database, you already understand the core concept: they store data as pairs—a way to look up a value using a specific key. Each item in the dictionary is a key-value pair.</span>
            <div class="image-container">
                <img src="https://cdn.pixabay.com/photo/2014/07/11/23/06/definition-390785_1280.jpg" alt="Thumbnail" id="thumbnail">
            </div>
        <span id="content-two">
            Some good things to know:
            <ul>
                <li>Dictionaries are good at representing objects that have information like users in a system.</li>
                <li>Each key must be unique.</li>
                <li>Each key must be immutable.</li>
            </ul>

            Below is an example of a simple dictionary.

        </span>

        <pre id="code-one"><code>
    student_profile = {
        "name": "Alex Johnson",
        "student_id": "A123456",
        "major": "Computer Science",
        "gpa": 3.85,
        "courses": ["Data Structures", "Algorithms", "Database Systems"]
    }
                    </code></pre>

        <span id="content-three">Content 3</span>
    </main>`}, 
    {
        id: 2, 
        title: "What's the deal with JavaScript?", content: `<main>
        <h1>Title</h1>
        <span>Placeholder</span>
        <div class="image-container">
            <img src="#" alt="Placeholder">
        </div>
        <span>Placeholder</span>
        <pre><code>
            print('Hello World!')
        </code></pre>
        <span>Placeholder</span>
    </main>` },
    {
        id: 3, 
        title: "Everything is Clickable", 
        content: `<main>
        <h1>Everything is Clickable</h1>
        <span>Most of the time, click events don't happen unless you're using an anchor tag, or a button. HTMX, on the other hand</span>
        <div class="image-container">
            <img src="#" alt="Placeholder">
        </div>
        <span>Placeholder</span>
        <pre><code>
            print('Hello World!')
        </code></pre>
        <span>Placeholder</span>
    </main>` }
]

function generatePost(post) {
    // List Inception
    const contentList = selectedPost.content

//     const postTemplate = `<main>
//     <h1>${post.title}</h1>
//     <span id="content-${contentList.id}">${post.content.content}</span>
//         <div class="image-container">
//             <img src=${post.images.url} alt=${post.images.placeholder} id="thumbnail">
//         </div>
//     <span id="content-two">
//         Some good things to know:
//         <ul>
//             <li>Dictionaries are good at representing objects that have information like users in a system.</li>
//             <li>Each key must be unique.</li>
//             <li>Each key must be immutable.</li>
//         </ul>

//         Below is an example of a simple dictionary.

//     </span>

//     <pre id="code-one"><code>
// student_profile = {
//     "name": "Alex Johnson",
//     "student_id": "A123456",
//     "major": "Computer Science",
//     "gpa": 3.85,
//     "courses": ["Data Structures", "Algorithms", "Database Systems"]
// }
//                 </code></pre>

//     <span id="content-three">Content 3</span>
// </main>`

    const contentToDisplay = contentList
    const title = selectedPost.title

    const target = document.body
    target.insertAdjacentHTML("beforeend", contentToDisplay)
    document.title = title
}

const postId = Number(getParam('id'))
const selectedPost = posts.find(post => post.id === postId)

// Check if a post was found before accessing its properties
if (selectedPost) {
    console.log("Title Found:", selectedPost.title); // Output: Found Post Title: First Post
    // Now you can use this object to display content, etc.
} else {
    console.error("Post not found for ID:", postId);
}


// Generate the site
generateHeader()
generatePost(posts)
generateFooter()