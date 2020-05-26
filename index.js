var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.port || 3000;

app.get('/', (requestAnimationFrame, res) => {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});


// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

http.listen(port, () => {
    console.log('listening on 3000');
});