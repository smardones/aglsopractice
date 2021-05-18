const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/users', (req, res) => {

        const allUsers = fetch('https://jsonplaceholder.typicode.com/users')
        .then(users => res.sendFile('../views', users))
        .catch(err => console.log(err));
    }
    );
}

