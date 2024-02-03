// BACK END
const express = require('express');
const {createServer} = require('http');
const {join} = require('path');
const {Server} = require('socket.io');
const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

//Tässä ei käytetä express staticia vaan lähetetään html manuaalisesti
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    //Kun käyttäjä lähettää viestin, lähetetään se kaikille muille käyttäjille heti
socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
});
});

//Kun käyttäjä liittyy, lähetetään viesti kaikille muille käyttäjille
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});