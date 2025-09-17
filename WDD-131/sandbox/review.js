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

const myApples = 4;
const friendApples = 2;
let total = myApples + friendApples;

document.getElementById("myAppleElement").textContent = myApples;
document.getElementById("friendAppleElement").textContent = friendApples;
document.getElementById("totalApplesElement").textContent = total;