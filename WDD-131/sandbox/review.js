/*

Primatives = numbers, strings, booleans, null, undefined
Objects = Object literals, Arrays, Functions, Classes, basically anything that isn't a primative

Backticks = ``, function like the fString in Python, insert variables into a string, `${variable}`

var, let, const. | var is deprecated (Variables set with var are global. let and const are designed for block level scopes), let is mutable, const is immutable. (const variables can still have their contents edited if they are arrays.) Good rule of thumb is to use const unless you know you will need to reassign the variable.

'foo' + 3 would be an error in Python, but JavaScript would return 'foo3', so it can do things that result in hidden bugs.
if a string is involved, it will convert everything into a string. If only numbers are involved, it will do math. Be hyperspecific and make sure you know what you are handing it.

JavaScript is backwards compatible, so old code will still work in modern browsers, but new code may not work in old browsers. Strict mode is a way to opt in to a restricted variant of JavaScript, which can catch common coding bloopers, prevent certain actions, and generally make your code more robust. You can enable strict mode by adding "use strict"; at the beginning of your script or function.

arrayname.push(value) adds value to the end of the array
arrayname.pop() removes the last value from the array and returns it

HTML, CSS and JavaScript are like a pizza. HTML is the crust, CSS is the toppings, and JavaScript is when you switch around the toppings while you're eating it.

jQuery features in JavaScript:

to-do: use query to generate a navbar.
*/

const navItems = ["Home", "Blog", "Photos", "Projects", "About", "Github", "Contact"];
const navBar = document.querySelector(".navigation");
navBar.insertAdjacentHTML("afterbegin", `<ul class="navList"></ul>`);
const navList = document.querySelector(".navList");
navItems.forEach(item => {
    navList.insertAdjacentHTML("beforeend", `<li class="navItem ${item}"><a href="#">${item}</a></li>`);
}

);
console.log("Navigation bar created with items:", navItems);
console.log("The navbar element:", navBar);

document.querySelector(".Home").setAttribute("href", "index.html");
document.querySelector(".Blog").setAttribute("href", "blog.html");
document.querySelector(".Photos").setAttribute("href", "photos.html");
document.querySelector(".Projects").setAttribute("href", "projects.html");
document.querySelector(".About").setAttribute("href", "about.html");
document.querySelector(".Github").setAttribute("href", "https://github.com/dchecketts");
document.querySelector(".Contact").setAttribute("href", "mailto:danielkchecketts@gmail.com");