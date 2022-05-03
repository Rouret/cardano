class Player{
    constructor(id,name,cards){
        this.name = name
        this.id = id
        this.deck = cards.cards.slice(0,this.deckLength)
        this.deckLength = 2
    }
}
module.exports = Player