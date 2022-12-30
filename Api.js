const http = require('http');
const { json } = require('stream/consumers');
const data = require('./data');

http.createServer(function(req, res){

    res.writeHead(200,{
        'Content-Type':'application\json'
    })

    res.write(JSON.stringify(data));
    res.end();

}).listen(5000);