
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

//----------------------------------------------------------------

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

//----------------------------------------------------------------

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

