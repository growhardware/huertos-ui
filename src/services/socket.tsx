import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

var io = sailsIOClient(socketIOClient);
// io.sails.url = 'http://localhost:1337'
io.sails.url = 'http://localhost:3000';
io.sails.environment = 'development';

export default io;
