// //Need name, location, bio, LinkedIn url, and GitHub URL.
// fs = require('fs');
// fs.writeFile('users.json', inquirer, [callback]);
// const inquirer = require('inquirer');

// inquirer
// .prompt([
//     {
//     type: `input`,
//     message: 'What is your name?',
//     name: `username`,
// },
// {
//     type: 'input',
//     message: `Where are you located?`,
//     location: `location`,
// },
// {
//     type: 'input',
//     message: `Would mind telling me about yourself?`,
//     bio: `bio`,
// },
// {
//     type: 'input',
//     message: `What is your LinkedIn URL?`,
//     LinkedIn: `linkedIn URL`,
// },
// {
//     type: 'input',
//     message: `What is your GitHub URL?`,
//     GitHub: `GitHub URL`,
// }
// ])

// .then((response) => {
//     console.log(response);
//     fs.appendFile('./html.html', JSON.stringify(response), (err) => console.log(err))
// });

// const h1 = document.querySelector('#h1');
// const h2 = document.querySelector('#h2');
// const h3 = document.querySelector('#h3');
// const h4 = document.querySelector('#h4');
// const h5 = document.querySelector('#h5');

// const makeHtml = (response) => {

// }

// h1.value=`${username}`;
// h2.value=`${location}`;
// h3.value=`${bio}`;
// h4.value=`${LinkedIn}`;
// h5.value=`${GitHub}`;

// console.log(fs);

// const inquirer = require('inquirer');
// inquirer
// .prompt([
//   {
//        type: 'input',
//        message: 'What is your name? ',
//         name: 'username',
//   },
//   {
//        type: 'input',
//        message: 'Where are you located? ',
//        name: 'location',
//   },
//   {
//       type: 'input',
//       message: 'Please enter a short Biography about yourself: ',
//        name: 'bio',
//   },
//   {
//       type: 'input',
//       message: 'what is your LinkedIn URL?',
//       name: 'LinkedInURL'
//   },
//   {
//       type: 'input',
//       message: 'what is your GitHub URL?',
//       name: 'GitHubURL'
//   }
// ])
// .then((response) => {
//     fs.writeFile("./index.html", createHTML(response), (err) => console.log(err))
// }
// );
// const createHTML = (response) => 
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <div class="easy" id="name">Name: 
//   ${response.username}
//   </div>
//   <div class="easy" id="location">Location: 
//   ${response.location}
//   </div>
//   <div class="easy" id="bio">Bio: 
//   ${response.bio}
//   </div>
//   <div class="easy" id="lnkdURL">LinkedIn: 
//   <a href= ${response.LinkedInURL}>
//   </div>
//   <div class="easy" id="GtHbURL">GitHub: 
//   <a href= ${response.GitHubURL}>
//   </div>
// <script src="./script.js"></script>
// </body>
// </html>`

// class Student {
//     constructor(name){
//         this.name = name
//     }
//     printName(){
//         console.log(this.name)
//     }
// }
// const alice = new Student('alice');
// const brian = new Student('brian');

// console.log(alice);
// console.log(brian);

// alice.printName();
// brian.printName();

// class Recipes {
//     constructor(name, ingredients, cookingInstructions, temperatures) {
//         this.name = name;
//         this.ingredients = ingredients;
//         this.cookingInstructions = cookingInstructions;
//         this.temperatures = temperatures;
//     }
//     printInfo() {
//         console.log(`name: ${this.name} \ningredients: ${this.ingredients} \ncookingInstructions: ${this.cookingInstructions} \n temperatures: ${this.temperatures}`)
//     }
// }
// const RoastBeef = new Recipes({name: 'RoastBeef', ingredients: ['2lbs Chuck Roast', '4 large Carrots', '2 Yellow Onions', '2 large Russet potatoes'], cookingInstructions: ['Sear off roast', 'peel and chop carrots, potatoes, and onions', 'after roast is seared, toss all into a crock pot and set to cook for 4 hours'], temperatures:'set the crock pot temp to low'}); 


// class Developer {
//     constructor(name, tech) {
//         this.name = name;
//         this.tech = tech;
//     }
//     introduction() {
//         console.log(`name: ${this.name} \n tech: ${this.tech}`)
//     }
// }

class Pizza {
    constructor({name, cheese, sauce, rating}){
        this.name = name;
        this.cheese = cheese;
        this.sauce = sauce;
        this.rating = rating;
    }
    printInfo(){
        console.log(`name: ${this.name} \ncheese: ${this.cheese} \nsauce: ${this.sauce} \nrating: ${this.rating}`)
    }
    addIngredient(ingredients){
        if (!ingredients.includes('')) {
            this.ingredients.push(ingredients);    
        }
    }
}

const margarita = new Pizza({name: 'Margarita', ingredients: ['bread', 'cheese'], rating: '4/6'})
margarita.printInfo()

