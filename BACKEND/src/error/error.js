export class CustomError extends Error{
    constructor(message, status){
        super(message)
        this.status = status
    }
}

export class ServerError extends Error{
    constructor(status, message){
        super(message)
        this.status = status
    }
}