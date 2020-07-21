const express = require('express');
const app = express();

require('./startup/prod')(app);
require('./startup/routes')(app);

const port = process.env.PORT || 8000;
app.listen(port, '0.0.0.0');

module.exports = app;