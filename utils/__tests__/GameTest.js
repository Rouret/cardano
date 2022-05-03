const Game = require('../Game')
const Player = require('../Player')
const CARDS = require('../../data/cards.json')

player1 = new Player("1", "player1", CARDS)
player2 = new Player("2", "player2", CARDS)

const game = new Game()


test('addPlayer', () => {
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect(game.players.length).toBe(2);
})

test('after addPlayer status must be playing', () => {
    expect(game.status).toBe(game.statusList.playing);
})

test('addPlayer when game is full', () => {
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect(game.players.length).toBe(2);
})