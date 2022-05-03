const Game = require('../Game')
const Player = require('../Player')

player1 = new Player("1","player1")
player2 = new Player("2","player2")

game = new Game([player1,player2])

test('round 0', () => {
    expect(game.currentPlayer).toBe(0);
});

test('round 1', () => {
    game.nextRound();
    expect(game.currentPlayer).toBe(1);
});


