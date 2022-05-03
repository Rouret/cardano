const express = require('express');
const Database = require('./utils/Database')
const Player = require('./utils/Player')
const Log = require('./utils/Log')
const app = express()
const config = require('./config.json');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PUBLIC_DIR = __dirname + "/public/"

const db = new Database();
const game = new Game()


app.use(express.static(config.public_folder))

app.get('/', (req, res) => {
    return res.sendFile(PUBLIC_DIR + 'index.html')
})

io.on('connection', (socket) => {
    //**** CLIENT MABAGEMENT
    const id = socket.client.id;
    const player = new Player(id, "player1")
    const userAddress = socket.handshake.address;

    //**** DB ADD
    db.addPlayer(player)
    Log.display(`➡️ with ${userAddress} [${id}] connected `);

    //**** FIND A GAME



    //**** CLIENT DISCONNECT
    socket.on('disconnect', () => {
        db.removePlayer(id)
        Log.display(`⬅️ with ${userAddress} [${id}] disconnected`);
    });
});

http.listen(config.port, () => {
    Log.display(`🔥 ${config.name} is listening (${config.port}) 🔥`)
});