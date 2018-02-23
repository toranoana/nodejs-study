var http = require('http');
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

http.get(url, function(res) {

    var body = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
        body += chunk;
    });

    res.on('end', function() {
        console.log(JSON.parse(body));
    });
});