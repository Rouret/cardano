const socket = io();
var user;
const config = {
    link: {
        gameFull: "CardAno.game.full",
        gameLog: "CardAno.game.log",
        game: "CardAno.game",
        userInfo: "CardAno.user",
    }
}

//**** USER INFO

socket.on(config.link.userInfo, function(msg) {
    user = msg
})

//****  GAME FULL
socket.on(config.link.gameFull, function(msg) {
    $("body").html("Game is full sorry mon reuf")
});

//****  GAME LOG
socket.on(config.link.gameLog, function(msg) {
    console.log(msg)
});

//****  GAME
socket.on(config.link.game, function(msg) {
    if (msg.currentPlayer.id === user.id) {
        alert("Ah vous de jouer")
    }
});

sendAction = function(action) {
    var action = new Action("nextRound", user, Action.actionList.nextRound)
    socket.emit(config.link.game, action)
}