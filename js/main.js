console.log("Het werkt");

const firstname = "Alex";
const lastname = "de GOAT";
const sex = "male";
let status = "online";
let age = 16;

const profileDiv = document.querySelector(".profile");
const nameParagraph = document.querySelector(".name");
const ageParagraph = document.querySelector(".age");
const addButton = document.querySelector(".add-profile");
const profilesDiv = document.querySelector(".profiles");

nameParagraph.textContent = firstname + " " + lastname;
ageParagraph.textContent = "age: " + age; 
profileDiv.classList.add(sex); 

addButton.addEventListener("click", function (event){
    alert("Vul hier alle gegevens in van een nieuwe profiel");
    const firstName = prompt("fill firstname: ");
    const lastName = prompt("lastname: ");
    const sex = prompt("sex: ");
    const status = "offline";
    const age = prompt("age: ");
<<<<<<< HEAD
    let profileHTML = createProfileDiv(firstName, lastName, sex,age); 
    profilesDiv.innerHTML += profileHTML;
=======
    let profileHTML = createProfileDiv(firstName, lastName, sex,age); // aanroepen van een functie
    
    // wat is het verschil?
    profilesDiv.innerHTML += profileHTML;
    profilesDiv.innerHTML = profileHTML;


>>>>>>> 70966f161bda4b992340157242321964eb7874a5
});


function createProfileDiv(fname, lname, sex, age){
    let htmlCode = `
        <div class="profile">
        <h3 class="name"> ${} ${lname}</h3>
        <p class="age"> age: ${age} </p>
    </div>
    `;
    return htmlCode;
}
