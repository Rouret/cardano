const Game = require('../Game')
const Player = require('../Player')
const CARDS = require('../../data/cards.json')

player1 = new Player("1","player1",CARDS)
player2 = new Player("2","player2",CARDS)

game = new Game([player1,player2])

test('round 0', () => {
    expect(game.currentPlayer).toBe(0);
});

test('round 1', () => {
    game.nextRound();
    expect(game.currentPlayer).toBe(1);
});


