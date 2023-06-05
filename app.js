const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./routes/apiRoutes');

app.use('/api/film/', apiRouter);




app.listen(port, ( 
) => console.info(`> listening at ${port}`));