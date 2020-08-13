const express = require('express')
const app = express()
var app_config = require('./app-config');
var mysql = require('mysql');

app.get('/', (req, res) => {
  var con = mysql.createConnection({
    host: app_config.mysql.host,
    user: app_config.mysql.user,
    password: app_config.mysql.password,
    database: app_config.mysql.database,
    port: app_config.mysql.port
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
     //res.send('connected');
  });

    res.send('Hello world from a Node.js app! welcome to nabil profile Thanks for your interesting')
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})
