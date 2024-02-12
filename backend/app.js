const express = require('express');
const router = require('./src/router');

const app = express();

require('./src/connection/db');
// app.use(express.json())

app.use(router);
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(3001, () => {
    console.log('connected success fully');
})
