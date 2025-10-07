// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    enrollStudents: function (sectionNum) {
        const section = this.sections.find(
            (section) => section.sectionNum === sectionNum
        )
        console.log(section)
    }
};

const courseName = aCourse.name
const courseCode = aCourse.code

function displayDetails(course) {
    const nameEl = document.querySelector('#courseName')
    const codeEl = document.querySelector('#courseCode')

    nameEl.textContent = course.name
    codeEl.textContent = course.code
}

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`
}

function displaySections(sections) {
    const sectionsEl = document.querySelector('#sections')
    const htmlStrings = sections.map(sectionTemplate)
    sectionsEl.innerHTML = htmlStrings.join('')
}


// Don't forget to call the functions you make!
displayDetails(aCourse)
displaySections(aCourse.sections)
aCourse.enrollStudents(2)