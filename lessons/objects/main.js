const player1 = {
    firstName: "jerraburger",
    lastName: "ratzalium",
    coldAge: 92,
    coldMajor: "gender studies",
    coldScore: 299
};


const facebookPage1 = {
    userName: "jerraburger123",
    coldTitle: "first time eating a big mac!!",
    realStory: "today was my first time eating a big mac burger from the popular food chain burger king",
    timeofPost: 12 - 3 - 1898,
    viewCount: 299


};

const healthyFood1 = {
    foodTitle: "snack-a-nigga",
    foodDescription: "feels like a delightful little snack taking away your breath!",
    foodHealth: "this meal has a lot of vitamin D and magnesium"
};

const healthyFood2 = {
    foodTitle: "durr-burger",
    foodDescription: "a nice vegan burger straight from the videogame fortnite!",
    foodHealth: "it's plant based and has a lot of fibers"
};

const healthyFood3 = {
    foodTitle: "droge cracker",
    foodDescription: "de cracker is droog(niet nat)",
    foodHealth: "is een droge cracker, vast prima voor mensen op dieet"
};

const foodRecipes = [healthyFood1, healthyFood2, healthyFood3];

console.log(foodRecipes)

const foodRecipe = document.querySelector("ul.foodArray")

for (let index = 0; index < foodRecipes.length; index++) {
    const subject = foodRecipes[index];
    foodRecipe.innerHTML += recipeStuff(subject);

}

function recipeStuff(subject) {
    let htmlCode = `
  <li>
        <h3>${subject.foodTitle}</h3>
        <p>${subject.foodDescription}</p>
        <p> ${subject.foodHealth}</p>
    </li>`
    
    return htmlCode;
}



