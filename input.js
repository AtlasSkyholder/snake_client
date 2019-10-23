const net = require('net');
const conn = require('./client');

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  })
  return stdin;
}

const handleUserInput = function(key) {
  let word = key;
  console.log(key);
  if (word === '\u0003') {
    process.exit();
  } else if (word === 'w') {
    connection.write("Move: up");
    console.log("up");
  } else if (word === 'a') {
    connection.write("Move: left");
    console.log("left");
  } else if (word === 's') {
    connection.write("Move: down");
    console.log("down");
  } else if (word === 'd') {
    connection.write("Move: right");
    console.log("right");
  } else if (word === 't') {
    connection.write('Say: Hello');
  }
}

module.exports = { setupInput };