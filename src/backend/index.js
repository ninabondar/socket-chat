const app = require('express')();
const server = require('http').createServer(app);
const socket = require('socket.io')(server);

const PORT = process.env.PORT || 3003;

socket.on('connection', sckt => {
  console.log(sckt, '<==========');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}!`));
