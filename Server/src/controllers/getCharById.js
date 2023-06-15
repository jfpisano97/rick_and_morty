// import axios from 'axios';

const axios = require('axios') 

const responseHandler = (response, res) => {
    const {id, name, gender, species, origin, image, status} = response.data;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({id, name, gender, species, origin, image, status}));
}

const errorHandler = (error, res)=>{
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(error.message);
}


function getCharById(res, id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => responseHandler(response, res))
    .catch((error) => errorHandler(error, res));
}


module.exports = {getCharById};