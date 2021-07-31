// const http = require('http');
// const fs = require('fs');

// const PORT = 8080;



// const handleRequest = (req, res) => {
//     fs.readFile(`${__dirname}/html.html`, (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(data);
    
//   });
// };
// //this is for the Favorite Foods Page
// const displayFavoriteFood = (req, res) => {
//     fs.readFile(`${__dirname}/html.html`, (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html'});
//         res.end(data);
//     });
// };
// //this is for the Favorite Movies page
// const displayFavoriteMovie = (req, res) => {
//     fs.readFile(`${__dirname}${req.url}.html`, (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html'});
//         res.end(data);
//     });
// };
// //this is for the Favorite CSS Framework Page
// const displayFavoriteCSSFramework = (req, res) => {
//     fs.readFile(`${__dirname}/html.html`, (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html'});
//         res.end(data);
//     });
// };

// switch (path) {
//     case '/displayFavoriteFood':
//         return displayFavoriteFood(res);

//     case '/displayFavoriteMovie':
//         return displayFavoriteMovieMovie(res);

//     case '/displayFavoriteCSSFramework':
//         return displayFavoriteCSSFramework(res);
// }

// const server = http.createServer(handleRequest);

// const path = request.url;

// server.listen(PORT, () => {
//     console.log(`Server is listening on PORT: ${PORT}`);
//   });

//First Express server!

// Input: Tammer Galal
// Output: tammergalal
// Input:    favorite tree    ever
// Output: favoritetreeever
// Input: one word
// Output: oneword

// let userInput = [];
// userInput.prompt('Please enter two words to be joined')

// function oneWord (userInput) {
//     userInput.join(' ');
//     return ''
// }

// oneWord();