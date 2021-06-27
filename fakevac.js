'use strict';
const { Socket } = require('dgram');
const net = require('net');


var port = 25
var host = '127.0.0.1'

var socket = net.connect(port,host, function() {
    console.log("Sending data");

    socket.on("data", function (data) {
        console.log("received data");
        console.log( data.toString() );
        if(data.toString().includes("CSGO_GAME_UI_STATE_INGAME -> CSGO_GAME_UI_STATE_INGAME"))
        {
            socket.write('disconnect "VAC banned from secure server."\r\n')
        }
        
    })
})

socket.on("error", function(err) {
    console.log("Error");
    console.log(err);
})

socket.setEncoding('utf8');