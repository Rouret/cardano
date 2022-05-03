const removeItems = require('remove-array-items')
class DataBase{
	constructor(){
		this.clients = {
            "lobby": {
                players : []
            }
        }
        this.defaultRoom = "lobby"
	}

	addClient(room,client){
        this.clients[room].players.push(client)
	}

	removeClient(room,id){
        
		let clientIndex = this.clients[room].players.findIndex(client => client.id === id)
		removeItems(this.clients[room].players, clientIndex, 1)
	}

	updateClient(room,clientUpdated){
		let clientIndex = this.clients[room].players.findIndex(client => client.id === clientUpdated.id)
		if(clientIndex !== -1){
			this.clients[lobby].players[clientIndex] = clientUpdated
		}
	}

	getClient(room,id){
		return this.clients[room].players(client => client.id === id)
	}

	getClients(room){
		return this.clients[room].players
	}
}

module.exports = DataBase