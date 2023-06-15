// const data = require('./utils/data');
const http = require('http');
const { getCharById } = require('./controllers/getCharById')


http
    .createServer((req, res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');

        const {url} = req;

        let id = url.split('/rickandmorty/character/')[1];
        
        if (url.includes('/rickandmorty/character/')){
            return getCharById(res, id); 
        }


        res.writeHead(404);
        res.end();

    })
    .listen(3001, 'localhost');