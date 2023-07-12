let express = require('express');

let server = express();
const file = '/build/index.html';

server.use(express.static('build'));

server.use(/^(\/.+|(?!\/).*)$/, function(request, response) {
    response.sendFile(__dirname + file);
});

server.listen(80);
console.log('listening port 80');
