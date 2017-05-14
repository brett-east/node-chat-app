const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });

  socket.emit('newMessage', {
    from: 'Shep',
    text: 'Gym tmw?',
    createdAt: 1235132534
  });

  socket.on('createMessage', (message) => {
    console.log('Create Message', message);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
