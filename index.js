var express = require('express');
var socket = require('socket.io');
var five = require('johnny-five'), button, led;

board = new five.Board();

var port = 5000;
var cooldown = 500;
var red = 50;
var green = 50;
var blue = 50;
var timer = 30000;

board.on('ready', () => {

    // App setup
    var app = express();
    var server = app.listen(port, function () {
        console.log("listening to requests on port " + port);
    });

    // Static files
    app.use(express.static('public'));

    // Socket setup
    var io = socket(server, {
        pingInterval: 1000,
        pintTimeout: 2000
    });

    var clients = {};


    button1 = new five.Button({
        pin: 3,
        isPullup: true
    });

    button2 = new five.Button({
        pin: 4,
        isPullup: true
    });

    button3 = new five.Button({
        pin: 5,
        isPullup: true
    });

    button4 = new five.Button({
        pin: 6,
        isPullup: true
    });

    button5 = new five.Button({
        pin: 7,
        isPullup: true
    });

    button6 = new five.Button({
        pin: 8,
        isPullup: true
    });

    button7 = new five.Button({
        pin: 9,
        isPullup: true
    });

    button8 = new five.Button({
        pin: 10,
        isPullup: true
    });


    button1.on("down", function (value) {
        io.sockets.emit('inputChange', {
            id: 'button1',
            value: 0
        });
    });


    button1.on("up", function (value) {
        io.sockets.emit('inputChange', {
            id: 'button1',
            value: 10
        });
    });


    button2.on("down", function () {
        io.sockets.emit('inputChange', {
            id: 'button2',
            value: 1
        });
    });

    button2.on("up", function () {
        io.sockets.emit('inputChange', {
            id: 'button2',
            value: 11
        });
    });


    button3.on("down", function (value) {
        io.sockets.emit('inputChange', {
            id: 'button3',
            value: 2
        });
    });

    button3.on("up", function (value) {
        io.sockets.emit('inputChange', {
            id: 'button3',
            value: 12
        });
    });


    button4.on("down", function () {
        io.sockets.emit('inputChange', {
            id: 'button4',
            value: 3
        });
    });

    button4.on("up", function () {
        io.sockets.emit('inputChange', {
            id: 'button4',
            value: 13
        });
    });


    button5.on("down", function () {
        io.sockets.emit('inputChange', {
            id: 'button5',
            value: 4
        });
    });

    button5.on("up", function () {
        io.sockets.emit('inputChange', {
            id: 'button5',
            value: 14
        });
    });

    button6.on("down", function () {
        io.sockets.emit('inputChange', {
            id: 'button6',
            value: 5
        });
    });

    button6.on("up", function () {
        io.sockets.emit('inputChange', {
            id: 'button6',
            value: 15
        });
    });


    button7.on("down", function () {
        io.sockets.emit('inputChange', {
            id: 'button7',
            value: 6
        });
    });

    button7.on("up", function () {
        io.sockets.emit('inputChange', {
            id: 'button7',
            value: 16
        });
    });



    button8.on("down", function () {
        io.sockets.emit('inputChange', {
            id: 'button8',
            value: 7
        });
    });

    button8.on("up", function () {
        io.sockets.emit('inputChange', {
            id: 'button8',
            value: 17
        });
    });


    io.on('connection', (socket) => {
        console.log('made socket connection to ' + socket.id);
        clients[socket.id] = socket;

        socket.on('disconnect', function () {
            console.log("disconnect: ", socket.id);
            delete clients[socket.id];
            socket.removeAllListeners();
            socket.disconnect();
        });
    });
});