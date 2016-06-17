import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import winston from 'winston';
import path from 'path';

import twitter from './twitter';

winston.log('info', 'App started');

// Configure dotenv
dotenv.config({ silent: true });

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

twitter(io);

// Configure express
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../public/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Configure route
app.get('/', (req, res) => {
  res.render('index');
});

// Listen port
server.listen(process.env.PORT, () => {
  winston.log('info', `Express server listening on port ${process.env.PORT}`);
});
