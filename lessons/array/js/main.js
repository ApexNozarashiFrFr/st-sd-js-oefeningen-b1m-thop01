<<<<<<< HEAD
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
=======
const exams = [
    "Programmeren", 
    "Engels", 
    "Nederlands", 
    "Burgerschap", 
    "Rekenen", 
    "Project"];

    // schoolrapport is een array, en dat kan je zien door de blokhaken []
const schoolReport = [10, 5, 7, 8,9, 7.5];
const reportList = document.querySelector("ul.report");
reportList.innerHTML = schoolReport;

schoolReport.push(3.2)
schoolReport[1] = 9; // dit zorgt ervoor dat 5 wordt veranderd naar 9

function showReport(){
    for (let index = 0; index < schoolReport.length; index++) {
        const grade = schoolReport[index];
        reportList.innerHTML += `<li> ${grade} </li>`;
    }
}

function showExamns(){
    for (let index = 0; index < exams.length; index++) {
        const subject = exams[index];
        reportList.innerHTML += `<li> ${subject} </li>`;
    }
}

function showFullReport(){
    // maak hier een rapport dat alle examens laat zien en je cijfers.


>>>>>>> 70966f161bda4b992340157242321964eb7874a5

}

showReport();
<<<<<<< HEAD

console.log(coldGrades)


=======
showExamns();



console.log(schoolReport);
>>>>>>> 70966f161bda4b992340157242321964eb7874a5
