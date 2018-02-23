# アニメサイト解析のプロミス化
アニメサイト解析ツールをプロミス化します。

## 事前準備
`npm install cheerio-httpcli`

## ソースコード
* getAnimeDataExPromise.js
```
var http = require('http');
var client = require('cheerio-httpcli')
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

http.get(url, function(res) {

    var body = '';
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
        body += chunk;
    });

    res.on('end', function() {
        
        // データ量が多いので、配列の１のみを取得
        var anime = JSON.parse(body)[1];

        client.fetch(anime.public_url, function(err, $, res, body) {
            var title = $("meta[property='og:title']").attr('content');
            var image = $("meta[property='og:image']").attr('content');
            console.log('title:' + title);
            console.log('image:' + image);
        })
    });
});
```

## 起動方法
`node getAnimeDataExPromise.js`

## 実行結果
```
$ node getAnimeDataExPromise.js
【公式】アニメ「アイドリッシュセブン」
http://idolish7.com/aninana/wp-content/themes/aninana_tpl_180214_00/assets/img/ogp_1.png
```