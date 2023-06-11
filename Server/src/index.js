const http = require('http');
const data = require('./utils/data');

http
    .createServer((req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');

        const {url} = req;

        if (url.includes('/rickandmorty/character/')){

            // let id = url.split('/rickandmorty/character/')[1];
            const id = url.split('/').at(-1); 

            // let character = data.filter((char)=>{return char.id === parseInt(id)});

            const character = data.find((char) => char.id == id);
            
            if (character) { 
                res.writeHead(200, {'Content-Type': 'aplication/json'});
                return res.end(JSON.stringify(character));
            } else {
                res.writeHead(404);
                return res.end(JSON.stringify({error: 'Character not found'}));
            }
        }


        res.writeHead(404);
        res.end();

    })
    .listen(3001, 'localhost');