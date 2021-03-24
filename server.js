// App dependencies
const express = require('express');

// Import the models we need
import Models from './Models/index.js';

// Variable declarations
const Room = Models.Room;
console.log(Room.get('some specifics'))

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World to me')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
