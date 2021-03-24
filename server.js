// App Global Dependencies
import http from 'http';

// Import the models we need
import Models from './Models/index.js';

// Variable declarations
const Rooms = Models.Rooms;
console.log(Rooms.get())

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
