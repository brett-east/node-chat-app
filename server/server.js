const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  //socket.emit message from admin 'Welcome to the chat app'
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
  //socket.broadcast.emit from admin 'New user joined'
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });

  socket.on('createMessage', (message) => {
    console.log('Create Message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
