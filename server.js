// const express = require('express')
// const app = express()



// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })



// app.get('/', (req, res)=> res.send('This is a catch all'));

// app.listen(3000)

// app.get('/api/terms/:term/:secondTerm/:weather', (req, res)=> {
//     res.send(`the param you searched for is: ` ,  ${req.params.weather})
// });

// const { response } = require('express')
const express = require('express')
const app = express()
// ports are 3000 - 8000
const PORT = 8765
const fs = require('fs')
const pets = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.json(pets)
})

app.post('/api/pets', (request, response) => {
    console.log(request.body);
    pets.push(request.body.pets)
response.json(pets)
}) 

app.listen(PORT, () => {
    console.log(`Server is listening for pets at ${PORT}`)
});



