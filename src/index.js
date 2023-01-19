const express = require('express')
const home = require('./home')

const app = express()
app.get('/', home)
response.end("Hello World!");
