module.exports = class HttpErorr extends Error{
    constructor(code,message){
        super(message);
        this.code = code;
    }
}