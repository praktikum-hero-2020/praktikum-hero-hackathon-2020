const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static('./dist'));

app.listen(PORT, function () {
  console.log('\x1b[32m%s\x1b[0m', `Server working on port ${PORT}.`);
});