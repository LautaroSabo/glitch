const HTTP = require ('http');
let moment = require("moment")
const PORT = 3001;

const SERVER = HTTP.createServer((request, response)=>{
    let hora = moment().add(13, 'h').hour();
    let mensaje = "Buenas noches"
    if(hora >= 6 && hora <= 12) mensaje = "Buenos Dias";
    if(hora >= 13 && hora <= 19) mensaje = "Buenos Tardes";
    
    response.end(` ${mensaje}`);
});

let connectedServer = SERVER.listen(PORT,()=>{console.log(`Server on Http://localhost:${PORT}`)});

connectedServer.on("error",error => console.log(error));