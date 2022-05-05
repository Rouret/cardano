const removeItems = require('remove-array-items')
const Action = require('./Action')

class Game {
    constructor() {
        this.players = [];
        this.currentPlayerIndex = 0;
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
            currentPlayer: this.getCurrentPlayer()
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
        return this.players[this.currentPlayerIndex];
    }

    nextPlayer() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    action(action) {
        if (this.status !== this.statusList.playing) return
        switch (action.type) {
            case Action.actionList.nextRound:
                this.nextPlayer();
                break;
            default:
                break;
        }
    }
}

module.exports = Game;