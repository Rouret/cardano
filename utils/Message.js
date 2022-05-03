class Message{
    constructor(message,obj,user){
        this.message = message;
        if(obj !== undefined){
            this.obj = obj
        }
        if(user !== undefined){
            this.user = user
        }
    }

}

module.exports = Message