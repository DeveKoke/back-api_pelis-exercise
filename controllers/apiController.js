
const fetchFromApi = require('../utils/fetch.js');


const getmovie = async (req, res) => {
    titleMovie = req.params.title;
    try{
        const movie = fetchFromApi.getMovieFromApi(titleMovie);
        movie.then (info =>
        res.status(200).send(`${info.Title}`))
    }
    catch(error){
        console.log(`ERROR: ${error.stack}`);
    }
}

const createMovie = (req, res) =>{
        console.log('creando peli');
        const title = req.body;
        res.status(201).send(`Movie ${title} created`)
}

const editMovie = (req, res) => {
    console.log('editando peli');
    const titleMovie = req.params.title;
    try {
      fetchFromApi.getMovieFromApi(titleMovie)
        .then(movie => {
          movie.title = 'Matrix'; // Modifica el valor de la clave "title"
          // movie.otraClave = 'Nuevo valor'
  
          res.status(200).json(movie);
        })
        .catch(error => {
          console.log(`ERROR: ${error.stack}`);
        });
  
      console.log(titleMovie);
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
    }
  }

const deleteMovie = async (req,res) => {
    movieDeleted = req.params.key;
        res.status(200).send(`${movieDeleted}, has been deleted`)
        console.log(`${movieDeleted}`);
}



module.exports = {
    getmovie,
    createMovie,
    editMovie,
    deleteMovie
}

