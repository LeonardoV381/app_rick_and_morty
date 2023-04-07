const http = require('http');
const characters = require('./utils/data');



const PORT = 3001;

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    url = req.url;
    console.log('server rised')
    if(url.includes("rickandmorty/character")){
      const id= url.split('/').pop();
      let filterCharacter = characters.filter(personaje => personaje.id === Number(id))
      console.log(id)
      res
     res.writeHead(200, {'Content-Type' : 'application/json'}).end(JSON.stringify(filterCharacter));
    }
}).listen(PORT, 'localhost')

