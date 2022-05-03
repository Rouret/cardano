const DB = require('../Database')
const Player = require('../Player')

const db = new DB()

test("addPlayer", () => {
    const idPlayer = "123"
    db.addPlayer(new Player(idPlayer, "player1"))
    console.log(db.data.players)
    expect(db.data.players.length).toBe(1)
    expect(db.data.players[0].id).toEqual(idPlayer)
})

test("removePlayer", () => {
    const idPlayer = "123"
    db.removePlayer(idPlayer)
    expect(db.data.players.length).toBe(0)
})

test("getPlayer", () => {
    const idPlayer = "123"
    db.addPlayer(new Player(idPlayer, "player1"))
    expect(db.getPlayer(idPlayer).id).toEqual(idPlayer)
})