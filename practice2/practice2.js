var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1?ogp=1';

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer();

server.on('request', function(req, res) {

    http.get(url, function(apiRes) {

        var body = '';
        apiRes.setEncoding('utf8');
    
        apiRes.on('data', function(chunk) {
            body += chunk;
        });

        apiRes.on('end', function() {
            var data = {};
            data.animes = JSON.parse(body);
            var template = fs.readFileSync('./practice2.ejs', 'utf-8');
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
