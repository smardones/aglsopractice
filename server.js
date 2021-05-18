const express = require('express');
const app = express();
const PORT = 3001;
const routes = require('./routes/users.js');

app.use(express.json());
app.use(routes);


app.listen(PORT, () => console.log('Now listening'));

