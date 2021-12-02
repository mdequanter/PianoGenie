var express = require('express');
var socket = require('socket.io');
pixel = require("node-pixel");
var five = require('johnny-five'), button, led;


board = new five.Board();
var strip = null;

var port = 5000;
var cooldown = 500;
var red = 50;
var green = 50;
var blue = 50;
var timer = 30000;

var ledPiano = 0;

board.on('ready', function () {




    strip = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [{ pin: 13, length: 43 },], // this is preferred form for definition
        gamma: 2.8, // set to a gamma that works nicely for WS2812
    });

    strip.on("ready", function () {
        console.log("Board ready, lets add light");
        strip.color("blue"); // turns entire strip red using a hex colour
        strip.show();
    });



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

    
    button9 = new five.Button({
        pin: 11,
        isPullup: true
    });
    
    button10 = new five.Button({
        pin: 12,
        isPullup: true
    });



    button1.on("down", function (value) {
        //strip.pixel(0).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button1',
            value: 0
        });
    });


    button1.on("up", function (value) {
        //strip.pixel(0).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button1',
            value: 20
        });
    });


    button2.on("down", function () {
        //strip.pixel(1).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button2',
            value: 1
        });
    });

    button2.on("up", function () {
        //strip.pixel(1).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button2',
            value: 21
        });
    });


    button3.on("down", function (value) {
        //strip.pixel(2).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button3',
            value: 2
        });
    });

    button3.on("up", function (value) {
        //strip.pixel(2).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button3',
            value: 22
        });
    });
    button4.on("down", function () {
        //strip.pixel(3).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button4',
            value: 3
        });
    });

    button4.on("up", function () {
        //strip.pixel(3).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button4',
            value: 23
        });
    });


    button5.on("down", function () {
        //strip.pixel(4).color("red");
        //strip.show();

        io.sockets.emit('inputChange', {
            id: 'button5',
            value: 4
        });
    });

    button5.on("up", function () {
        //strip.pixel(4).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button5',
            value: 24
        });
    });

    button6.on("down", function () {
        //strip.pixel(5).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button6',
            value: 5
        });
    });

    button6.on("up", function () {
        //strip.pixel(5).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button6',
            value: 25
        });
    });


    button7.on("down", function () {
        //strip.pixel(6).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button7',
            value: 6
        });
    });

    button7.on("up", function () {
        //strip.pixel(6).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button7',
            value: 26
        });
    });

    button8.on("down", function () {
        //strip.pixel(7).color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button8',
            value: 7
        });
    });

    button8.on("up", function () {
        //strip.pixel(7).color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button8',
            value: 27
        });
    });
    

    button9.on("down", function () {
        //strip.color("red");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button9',
            value: 8
        });
    });


    button9.on("up", function () {
        //strip.color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button9',
            value: 28
        });
    });

    button10.on("down", function () {
        //strip.color("yellow");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button9',
            value: 9
        });
    });
    
    button10.on("up", function () {
        //strip.color("blue");
        //strip.show();
        io.sockets.emit('inputChange', {
            id: 'button9',
            value: 9
        });
    });







    io.on('connection', (socket) => {
        console.log('made socket connection to ' + socket.id);
        clients[socket.id] = socket;

        socket.on("message", function (data) {
            console.log(data);
        });

        socket.on("note", function (data) {
            //console.log(data);
            if (data == 0) {
                strip.color("blue");
                strip.show();
            }
            data = data - 29;

            if (data > 42) {
                data = 42;
            }
            if (data < 0) {
                data = 0 ;
            }
            if (data >= 0) {
                strip.pixel(data).color("red");
            }
            strip.show();

        });



        socket.on('disconnect', function () {

            console.log("disconnect: ", socket.id);
            delete clients[socket.id];
            socket.removeAllListeners();
            socket.disconnect();
        });
    });
});