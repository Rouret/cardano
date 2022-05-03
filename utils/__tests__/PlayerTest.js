const Player = require('../Player')
const CARDS = require('../../data/cards.json')



test('test deck', () => {
    player1 = new Player("1","player1",CARDS)
    player1.deckLength = 2;
    expect(player1.deck).toEqual(CARDS.cards.slice(0,2));
});


