var http = require('http');
var client = require('cheerio-httpcli');
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

getHttpPromise(url)
.then(function(animedata) {
    return parseHtmlPromise(animedata);
}).then(function(result) {
    console.log(result.title);
    console.log(result.image);
});

function getHttpPromise(url) {
    return new Promise(function(resolve) {
        http.get(url, function(res) {

            var body = '';
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                resolve(JSON.parse(body)[1]);
            });
        });
    });
}

function parseHtmlPromise(animedata) {
    return new Promise(function(resolve) {
        client.fetch(animedata.public_url, function(err, $, res, body) {
            var obj = {};
            obj.title = $("meta[property='og:title']").attr('content');
            obj.image = $("meta[property='og:image']").attr('content');
            resolve(obj);
        });
    });
}
