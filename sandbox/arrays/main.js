const steps = ["one", "two", "three"];
function listTemplate(step) {
    const listElement = document.getElementById("#myList")
    return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("") // set the innerHTML


grades = ['A', 'B', 'A']

function convertGrades(grade) {
    let points = 0
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

// Map
const gpaPoints = grades.map(convertGrades);

// Reduce
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

// Filter
const shorts = words.filter(function (word) {
    return word.length < 6;
});

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

// indexOf
let luckyIndex = numbers.indexOf(luckyNumber);