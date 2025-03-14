module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('A user connected');
      
      // Handle chat messages
      socket.on('chatMessage', (msg) => {
        console.log('Message: ', msg);
        socket.broadcast.emit('chatMessage', msg);
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  