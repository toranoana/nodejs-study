# アニメサイト解析
アニメ情報取得APIを使用し取得したアニメサイトを解析し、指定したタグの値を取得する。

## 事前準備
'npm install cheerio-httpcli'

## ソースコード
* getAnimeDataEx.js
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
`node getAnimeDataEx.js`

## 実行結果
```
$ node getAnimeDataEx.js
title:【公式】アニメ「アイドリッシュセブン」
image:http://idolish7.com/aninana/wp-content/themes/aninana_tpl_180214_00/assets/img/ogp_1.png
```