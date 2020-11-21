const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
  // to allow cross domain requests to send cookie information.
  // res.header('Access-Control-Allow-Credentials', true);

  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header('Access-Control-Allow-Origin', '*');

  // list of methods that are supported by the server
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');

  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN'
  );

  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
