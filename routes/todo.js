const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/todo/:userId', (req, res) => {
        const searchId = req.params.id;
        const todoList = fetch('https://jsonplaceholder.typicode.com/todos')
        .then(todos => {
            const userTodos = todos.filter(user => user.userid = searchId);
            res.sendFile('./view/todos', userTodos);
        })
        .catch(err => console.log(err));
    }
    );
}