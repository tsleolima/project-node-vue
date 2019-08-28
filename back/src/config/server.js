const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 8020);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

module.exports = app;