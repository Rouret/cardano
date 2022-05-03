const express = require('express');
const Database = require('./utils/Database')
const Player = require('./utils/Player')
const Message = require('./utils/Message');
const removeItems = require('remove-array-items');
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const BASE = "anoCard"
const port = 3000
const PUBLIC_DIR = __dirname + "/public/"

var db = new Database();

app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.sendFile(PUBLIC_DIR + 'index.html')
})


io.on('connection', (socket) => {
    //Room full
    if(db.getClients(db.defaultRoom).length === 2){
        socket.emit(BASE + '.full',{message : "The room is full"})
        return
    }

    //join game
    newPlayer = new Player(socket.client.id,"name")
    io.to("loby").emit(BASE + '.connected',new Message("A user has connected",newPlayer))
    socket.join("lobby")
    db.addClient("lobby",newPlayer)

    console.log(db.getClients("lobby"))

    socket.on("sendMessage", message => {
        message = (new Message(message,null,db.getClient("lobby",socket.client.id)))
        io.to("lobby").emit(BASE + '.message',message)
    })
    

    socket.on('disconnect', () => {
		db.removeClient("lobby",socket.client.id)
        console.log(db.getClients("lobby"))
    });
});

http.listen(port, () => {
    console.log("oé oé")
});