class Action {
    static actionList = {
        nextRound: "nextRound",
    }
    constructor(type, user, obj) {
        this.type = type
        this.user = user
        this.obj = obj


    }
}