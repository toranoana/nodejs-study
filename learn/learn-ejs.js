var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer();

server.on('request', function(req, res) {

    /** ここに追加 */
});

server.listen(port, hostname, function() {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});

var data = {
    header: '今期お勧めのアニメ',
    animes: [
        {
            title: 'ゆるきゃん',
            image: 'http://yurucamp.jp/images/ogp3.jpg',
            production: 'C-Station'
        },
        {
            title: 'ポプテピピック',
            image: 'http://hoshiiro.jp/ogp.png',
            production: '神風動画'
        },
        {
            title: 'りゅうおうのおしごと',
            image: 'http://ryuoh-anime.com/template/sns.jpg',
            production: 'project No.9'
        },
        {
            title: 'からかい上手の高木さん',
            image: 'http://takagi3.me/images/ogp2.jpg',
            production: 'シンエイ動画'
        },
        {
            title: '宇宙よりも遠い場所',
            image: 'http://yorimoi.com/images/top-main-v2.jpg',
            production: 'マッドハウス'
        }
    ]
};