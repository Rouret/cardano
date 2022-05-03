const CARDS = require("../data/cards.json")

class Player {
    constructor(id, name) {
        this.name = name
        this.id = id
        this.deckLength = 2
        this.deck = CARDS.cards.slice(0, this.deckLength)
    }
}
module.exports = Player