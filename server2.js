var http = require('http');

function onRequest(request, response) {
    console.log("Ouvindo...");
    response.writeHead(200, {'Content-Type':'text/plain'});

    response.write('Ola Mundo');
    response.end();
}

http.createServer(onRequest).listen(3000);
