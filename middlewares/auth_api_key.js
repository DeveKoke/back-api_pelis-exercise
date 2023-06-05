// https://www.omdbapi.com/?apikey=3beb4589&t=Blade+Runner
require("dotenv").config();
const api_key = process.env.API_KEY;

const checkApiKey = (req, res, next)=>{
    console.log(api_key);
    console.log(req.query.apikey);
    if(req.query.apikey === api_key){
        
        next()
    }else{
        res.status(401).send('Error, API KEY not supported')
    }
}

module.exports = checkApiKey;