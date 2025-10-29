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
            <li id="logo"><a href ="../">
            <?xml version="1.0" encoding="UTF-8"?>
            <svg id="a" data-name="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 308.96">
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
            <li><a href="../">Home</a></li>
            <li><a href="../about/">About</a></li>
            <li><a href="../blog/?id=${lastPost}">Newest</a></li>
        </ul>
    </nav>
</header>`
    document.body.insertAdjacentHTML("afterbegin", headerContent)
}

function generateFooter() {
    const footerContent = `<footer>
    <div class="footer-logo">
        <a href="../" class="footer-logo-img">
        <?xml version="1.0" encoding="UTF-8"?>
            <svg id="a" data-name="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 308.96">
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
        <a href="../" class="logo-text-one">Vibe Coding</a>
        <a href="../" class="logo-text-two">Development Log</a>
    </div>
    <div class="links">
        <a href="https://linkedin.com/in/daniel-checketts" target="_blank" rel="noopener noreferer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" id="account-box">
        <path
            d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-46q-54-53-125.5-83.5T480-360q-83 0-154.5 30.5T200-246v46Z" />
    </svg></a>
        <a href="https://github.com/nocstraznik" target="_blank" rel="noopener noreferer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" id="cloud">
        <path
            d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Z" />
    </svg></a>
        <a href="mailto:danielkchecketts@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" id="mail">
        <path
            d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
    </svg></a>
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