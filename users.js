const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Main endpoint');
})

app.listen(3000, () => {
    console.log('Up and running! -- user managment application')
})