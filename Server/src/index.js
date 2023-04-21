const http = require('http');
// const characters = require('./utils/data');
const getCharById = require("./controllers/getCharById");

const PORT = 3001;

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    try{
    const { url } = req;
    
    if(url.includes("/rickandmorty/character")){
      const id= url.split('/').pop();
      // let filterCharacter = characters.filter(personaje => personaje.id === Number(id))
      // console.log(req.url)
      getCharById(res, id);

    //   res
    //  res.writeHead(200, {'Content-Type' : 'application/json'}).end(JSON.stringify(filterCharacter));
    // }
    // else{
    //   res.writeHead(500, {"Content-Type" : "text/plain" })
    //   res.end("Se ha presentado un error");
    }
  }catch(error){
    console.log(error);
    throw new Error(error);
    }
}).listen(PORT, 'localhost')

