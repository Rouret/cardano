const removeItems = require('remove-array-items')
class DataBase {
    constructor() {
        this.data = {
            players: [],
        }
    }

    addPlayer(player) {
        this.data.players.push(player)
    }

    removePlayer(playerId) {
        let clientIndex = this.data.players.findIndex(client => client.id === playerId)
        removeItems(this.data.players, clientIndex, 1)
    }

    getPlayer(playerId) {
        return this.data.players.find(client => client.id === playerId)
    }
}

module.exports = DataBase