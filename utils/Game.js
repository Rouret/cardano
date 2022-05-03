class Game {
    constructor() {
        this.players = [];
        this.currentPlayer = 0;
        this.statusList = {
            waiting: 0,
            playing: 1,
            finished: 2
        }
        this.status = this.statusList.waiting;
    }

    addPlayer(player) {
        if (this.status !== this.statusList.waiting) return
        if (this.players.length >= 2) return

        this.players.push(player);

        if (this.players.length === 2) {
            this.status = this.statusList.playing;
        }
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