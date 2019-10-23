const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect  = require('./client');
const {setupInput} = require('./input');
const handleUserInput = require('./input');

console.log('Connecting ...');

setupInput(connect());