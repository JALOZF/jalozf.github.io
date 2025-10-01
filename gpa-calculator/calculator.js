// Functions

function gradeLister() {
    // 1. Take input and put it into an array
    // get grades from input
    const gradesElement = document.querySelector('#grade')
    // split on commas (grades is an array)
    let grades = gradesElement.value.split(',')
    // clean whitespace
    // convert to uppercase
    grades = grades.map(cleanGrade)
    // return array
    return grades
}

function cleanGrade() {
    return grade.trim().toUpperCase()
}

function convertGradeToPoints(grade) {
    // 2. Convert grade to points
}

function calculateGPA(gpaPoints) {
    // 3. Calculate the GPA
}

function displayGPA(gpa, selector) {

}

function clickSubmit(event) {
    // When the submit button is clicked, this is called

    const gpaPoints = gradeLister()
    const gpa = calculateGPA(gpaPoints)
    displayGPA(gpa, '#output')
}

document.querySelector('#submitButton').addEventListener('click', clickSubmit)