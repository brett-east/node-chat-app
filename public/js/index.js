var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Brett',
    text: 'Sure mate sounds good'
  });

});

socket.on('newMessage', function(message) {
  console.log('New Message', message);
});
