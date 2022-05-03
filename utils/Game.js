const removeItems = require('remove-array-items')
class Game {
    constructor() {
        this.players = [];
        this.currentPlayer = 0;
        this.roomName = "game"
        this.statusList = {
            waiting: 0,
            playing: 1,
        }
        this.status = this.statusList.waiting;
    }

    getGameStatus() {
        return {
            status: this.status,
            players: this.players,
            currentPlayer: this.players[this.currentPlayer]
        };
    }

    addPlayer(player) {
        if (this.status !== this.statusList.waiting) return false
        if (this.players.length >= 2) return false

        this.players.push(player);

        if (this.players.length === 2) {
            this.status = this.statusList.playing;
        }
        return true
    }

    removePlayer(player) {
        if (this.status !== this.statusList.playing) return false

        const playerIndex = this.players.indexOf(player);

        if (playerIndex === -1) return false
        this.status = this.statusList.waiting;
        removeItems(this.players, playerIndex, 1)
    }

    nextRound() {
        if (this.status !== this.statusList.playing) return
        this.nextPlayer();
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayer];
    }

    nextPlayer() {
        this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }
}

module.exports = Game;