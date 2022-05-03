class Game{
    constructor(players){
        this.players = players;
        this.currentPlayer = 0;
        
    }

    nextRound(){
        this.nextPlayer();
    }

    getCurrentPlayer(){
        return this.players[this.currentPlayer];
    }

    nextPlayer(){
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }
}

module.exports = Game;