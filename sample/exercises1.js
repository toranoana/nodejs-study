var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer();
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

server.on('request', function(req, res) {

    http.get(url, function(apires) {

        var body = '';
        apires.setEncoding('utf8');
    
        apires.on('data', function(chunk) {
            body += chunk;
        });
    
        apires.on('end', function() {

            var data = {};
            data.animes = JSON.parse(body);
            var template = fs.readFileSync('./exercises1.ejs', 'utf-8');
            var page = ejs.render(template, data);
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(page);
            res.end();
        });
    });
});

server.listen(port, hostname, function() {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});
