var http = require('http');
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

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
            var animes = JSON.parse(body);
            var html = '<table>';
            html += '<tr><th>タイトル</th><th>URL</th><th>twitter</th></tr>'
            for (anime of animes) {
                html += '<tr>'
                html += '<td>' + anime.title + '</td>';
                html += '<td>' + anime.public_url + '</td>';
                html += '<td>' + anime.twitter_account + '</td>';
                html += '</tr>';
            }
            html += '</table>';

            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(html);
            res.end();
        });
    });
});

server.listen(port, hostname, function() {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});
