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

const n = 10
const rotationInc = 160 / n;
const startRotation = -28.125
const startTranslate = 55
var currentTranslate = startTranslate
const a = startTranslate / startRotation

var isDown = true
function setupNextRotation () {
    let temp;
    if(isDown) {
        temp = Math.abs(currentTranslate - 10)
    }else{
        temp = Math.abs(currentTranslate + 10)
    }
    if(temp === currentTranslate) {
        currentTranslate = 15
        isDown = false
    }
    else currentTranslate = temp
    
}

var totalHTML = '';

for (let i = 0; i < n; i++) {
    setupNextRotation()
    let card = new Card("C",currentTranslate,startRotation + rotationInc * i)
    totalHTML +=  card.getHtml()

}

$("#cards").html(totalHTML)


$(".card").hover(function(){
    $(this).addClass("card-test")
}, function(){
    $(this).removeClass("card-test")
})

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