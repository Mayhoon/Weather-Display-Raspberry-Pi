var app = require('express')();
var http = require('http').createServer(app);
var express = require('express');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/backgrounds'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/icons'));

http.listen(3000, () => {
    console.log('listening on *:3000');
});