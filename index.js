const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rutas = require('./rutas');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', rutas);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});