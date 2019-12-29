const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3003;

io.on('connection', socket => {
  socket.on('chat message', msg => console.log({msg}));
});

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}!`));
