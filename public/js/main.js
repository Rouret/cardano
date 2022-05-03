const socket = io();
const config = {
    link: {
        gameFull: "CardAno.game.full",
        gameLog: "CardAno.game.log",
        game: "CardAno.game",
    }
}


socket.on(config.link.gameFull, function(msg) {
    $("body").html("Game is full sorry mon reuf")
});

socket.on(config.link.gameLog, function(msg) {
    console.log(msg)
});

socket.on(config.link.game, function(msg) {
    console.log(msg)
});