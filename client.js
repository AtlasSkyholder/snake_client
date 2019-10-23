const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log("Sucessfully connected to game server", data);

  });

  conn.on('connect', (data) => {
    conn.write("Name: FRE");
    
    // setTimeout(() => {conn.write("Move: up", data);} , 0);
    // setTimeout(() => {conn.write("Move: left", data);} , 100);
    // setTimeout(() => {conn.write("Move: down", data);} , 200);
    // setTimeout(() => {conn.write("Move: right", data);} , 300);
  });

  return conn;
};

module.exports = connect;