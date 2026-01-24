const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }))
  .use(bodyParser.json())
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
