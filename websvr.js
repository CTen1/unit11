const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('Hello World, my name is Cole Ten');
  response.end();
}).listen(8001);
