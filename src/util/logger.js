function log(name) {
    console.log("My name is"+name)
}
function welcome(){
    console.log("Welcome to my application, I am student of functionup bootcamp")
}
const url= "https://www.google.com"

module.exports.loggingname= log
module.exports.welcomemessage= welcome
module.exports.endpoint= url
