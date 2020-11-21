const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());

const { PORT = 3000 } = process.env;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log('\x1b[32m%s\x1b[0m', `Server working on port ${PORT}.`);
});
