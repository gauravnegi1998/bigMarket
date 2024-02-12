const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:test123@cluster0.thnjh9c.mongodb.net/Mern?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
const db = mongoose.connection;

db.on('error', () => console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected successfully')
});