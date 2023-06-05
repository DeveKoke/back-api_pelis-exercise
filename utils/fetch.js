require("dotenv").config();
const fetch = require('node-fetch');
const api_key = process.env.API_KEY;

async function getMovieFromApi (title){
    try {
        let findApi = await fetch(`https://www.omdbapi.com/?apikey=${api_key}&t=${title}`);
        let movie = await findApi.json();
        return movie;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

async function deleteMovieFromApi (key){
    try {
        let findApi = await fetch(`https://www.omdbapi.com/?apikey=${api_key}&t=${key}`);
        let movie = await findApi.json();
        delete movie;
        console.log(`${key}, has been deleted`);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}


module.exports ={
    getMovieFromApi,
    deleteMovieFromApi
}