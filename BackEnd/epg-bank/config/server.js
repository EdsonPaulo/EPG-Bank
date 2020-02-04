'use strict'
const http = require('http');
const debug = require('debug')('crud:server');
const app = require('../src/app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port); 
server.on('error', onError);
server.on('listening', onListening);
console.log('EPG-Bank API rodando na porta ' + port);

/* Objectivo: Normalizar a porta do servidor; */
function normalizePort( val ) {
    const port = parseInt(val, 10);
    if ( isNaN(port) ) return val;
    if ( port >= 0 ) return port;
    return false;
}

/* Objectivo: Tratar erros no servidor; */
function onError(error) {
    if( error.syscall !== 'listen' ) throw error;

    const bind = typeof port === 'string' ? 
        'Pipe ' + port :
        'Port ' + port; 

    switch (error.code) { //verificar o erro 
        case 'EACCES':  //erro de permissao
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;

        case 'EADDRINUSE': //erro de endereco em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;

        default: throw error;
    }
}

/* Objectivo: fazer debug do servidor; */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Servidor escutando em ' + bind)
        
}