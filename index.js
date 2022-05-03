const express = require('express');
const Database = require('./utils/Database')
const Player = require('./utils/Player')
const Game = require('./utils/Game')
const Log = require('./utils/Log')
const app = express()
const config = require('./config.json');
const Message = require('./utils/Message');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PUBLIC_DIR = __dirname + "/public/"

const db = new Database();
const game = new Game()

function baseNameEmit(...args) {
    return config.name + "." + args.join(".")
}

app.use(express.static(config.public_folder))

app.get('/', (req, res) => {
    return res.sendFile(PUBLIC_DIR + 'index.html')
})

io.on('connection', (socket) => {
    //**** CLIENT MABAGEMENT
    //console.log(socket.client)
    const id = socket.client.id;
    const player = new Player(id, "player1")
    const userAddress = socket.handshake.address;

    //**** DB ADD
    db.addPlayer(player)
    Log.display(`➡️ with ${userAddress} [${id}] connected `);

    //**** FIND A GAME
    const result = game.addPlayer(player);
    if (!result) {
        socket.emit(baseNameEmit("game.full"))
    } else {
        socket.join(game.roomName)
        if (game.status === game.statusList.playing) {
            io.to(game.roomName).emit(baseNameEmit("game.log"), new Message("Game is starting"))
            io.to(game.roomName).emit(baseNameEmit("game"), game.getGameStatus())
        }
    }

    //**** CLIENT DISCONNECT
    socket.on('disconnect', () => {
        game.removePlayer(player)
        db.removePlayer(id)
        Log.display(`⬅️ with ${userAddress} [${id}] disconnected`);
    });
});

http.listen(config.port, () => {
    Log.display(`🔥 ${config.name} is listening (${config.port}) 🔥`)
});