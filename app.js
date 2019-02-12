var express = require('express')
var app = express();

let body_parser = require('body-parser')

let router = require('./api/routers/router.js')
let port = 4000;

app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())
app.use(router)
if(app.listen(port))
console.log('sever started')