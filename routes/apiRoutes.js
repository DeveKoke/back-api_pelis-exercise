const express = require('express');
const checkApiKey = require('../middlewares/auth_api_key')
const apiController = require('../controllers/apiController')
const apiRouter = express.Router();

apiRouter.get('/:title', apiController.getmovie);
apiRouter.post('/', checkApiKey, apiController.createMovie);
apiRouter.put('/:title', checkApiKey, apiController.editMovie);
apiRouter.delete('/:title', checkApiKey, apiController.deleteMovie)



module.exports = apiRouter