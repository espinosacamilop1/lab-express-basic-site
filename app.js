const { response } = require('express');
const express = require('express');
const { request } = require('http');

const app = express();

app.use(express.static('public'))

app.listen(3000, ()=> console.log('My first app is listening on port 3000!'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/views/home.html")
});

app.get('/about.html', (req, res) =>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/works.html', (req, res) =>{
    res.sendFile(__dirname + "/views/works.html")
})

app.get('/gallery.html', (req, res) =>{
    res.sendFile(__dirname + "/views/gallery.html")
})
