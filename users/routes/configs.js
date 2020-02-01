const express = require('express');
const app = express();

app.get('/users/:userId', [
    UsersController.getById
]);