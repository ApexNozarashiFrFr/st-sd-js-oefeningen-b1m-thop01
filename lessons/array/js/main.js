const exams = ["Engels", "PHP", "Nederlands", "Burgerschap", "Rekenen"]
const coldGrades = [10, 9, 9, 8, 10, 7.4, 6]
const showReport = document.querySelector('ul.schoolStuff')
const showSubjects = document.querySelector("ul.rahRah")
showReport.innerHTML = coldGrades
showSubjects.innerHTML = exams

coldGrades.push(3.2)
coldGrades[2] = 7; 

function showReport(){
    for (let index = 0; index < coldGrades.length; index++) {
        const grade = coldGrades[index];
        reportP.innerHTML += `<li> ${grade} </li>`;
    }
}

function showExams(){
    for (let index = 0; index < exams.length; index++) {
        const subject = exams[index];
        showSubjects.innerHTML += `<li> ${subject} </li>`;
    }

}

showReport();

console.log(coldGrades)


