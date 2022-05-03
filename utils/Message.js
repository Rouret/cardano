class Message{
    constructor(message,obj){
        this.message = message;
        if(obj !== undefined){
            this.obj = obj
        }
    }
}

module.exports = Message