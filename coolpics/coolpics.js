
// Menu Button Click Event
const menuButton = document.querySelector(".menu-button")
function toggleMenu() {
  const menu = document.querySelector(".menu")
  menu.classList.toggle("hide")
}

menuButton.addEventListener("click", toggleMenu)

// Resize Event
function handleResize() {
    const menu = document.querySelector(".menu")
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide")
        menuButton.classList.add('hide')
    } else {
        menu.classList.add("hide")
        menuButton.classList.remove("hide")
    }
}

handleResize();
window.addEventListener("resize", handleResize)

const viewerButton = document.querySelector(".close-viewer")
function viewerOff() {
    const viewer = document.querySelector(".viewer")
    if (!viewer) return;
    viewer.classList.toggle("viewer-hide")
}

viewerButton.addEventListener("click", viewerOff)

// Gallery Click Event
const gallery = document.querySelector(".gallery")
function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const figureToView = gallery.querySelector("figure")
    const toView = figureToView.querySelector("img")
    // get the src attribute from that element and 'split' it on the "-"
    const imageSource = toView.src
    const base = imageSource.split('-')[0]
    console.log(base)
    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const bigger = base + "-full.jpeg"
    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const viewer = document.querySelector(".viewer")
    const viewerImage = viewer.querySelector("img")
    viewerImage.src = bigger
    viewer.classList.remove("viewer-hide")

    // add a listener to the close button (X) that calls a function called closeViewer when clicked

}
gallery.addEventListener("click", viewHandler)