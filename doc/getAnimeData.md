# アニメ情報取得
アニメ情報取得APIを使用し、アニメ情報を取得します。

## ソースコード
* getAnimeData.js
```
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
```

## 起動方法
`node getAnimeData.js`

## 実行結果
```
$ node animeGetData.js
[ { title_short2: '',
    twitter_account: 'milkyholmes',
    public_url: 'https://sp.bushiroad.com/special_tv/',
    title_short1: 'ミルキィホームズ',
    sex: 0,
    twitter_hash_tag: 'milkyholmes',
    id: 673,
    sequel: 5,
    created_at: '2018-01-07 20:29:38.0',
    city_name: '',
    cours_id: 17,
    title: '探偵オペラ ミルキィホームズ アルセーヌ 華麗なる欲望',
    city_code: 0,
    title_short3: '',
    updated_at: '2018-01-07 20:29:38.0' },
  { title_short2: '',
    twitter_account: 'iD7Mng_Ogami',
    public_url: 'http://idolish7.com/aninana/',
    title_short1: 'アイドリッシュセブン',
    sex: 1,
    twitter_hash_tag: 'アイナナ',
    id: 674,
    sequel: 0,
    created_at: '2018-01-07 20:29:38.0',
    city_name: '',
    cours_id: 17,
    title: 'アイドリッシュセブン',
    city_code: 0,
    title_short3: '',
    updated_at: '2018-01-07 20:29:38.0' },
  { title_short2: '',
    twitter_account: 'yorimoi',
    public_url: 'http://yorimoi.com/',
    title_short1: '宇宙よりも遠い場所',
    sex: 0,
    twitter_hash_tag: 'よりもい',
    id: 675,
    sequel: 0,
    created_at: '2018-01-07 20:29:38.0',
    city_name: '',
    cours_id: 17,
    title: '宇宙よりも遠い場所',
    city_code: 0,
    title_short3: '',
    updated_at: '2018-01-07 20:29:38.0' },
  { title_short2: '',
    twitter_account: 'damepri_anime',
    public_url: 'https://damepri-anime.jp/',
    title_short1: 'ダメプリ',
    sex: 1,
    twitter_hash_tag: 'ダメプリ',
    id: 676,
    sequel: 0,
    created_at: '2018-01-07 20:29:38.0',
    city_name: '',
    cours_id: 17,
    title: 'ダメプリ ANIME CARAVAN',
    city_code: 0,
    title_short3: '',
    updated_at: '2018-01-07 20:29:38.0' },

　〜〜　中略　〜〜

  { title_short2: '',
    twitter_account: 'FateEXTRA_LE',
    public_url: 'http://fate-extra-lastencore.com/',
    title_short1: 'Fate/EXTRA Last Encore',
    sex: 0,
    twitter_hash_tag: 'FateEX_LE',
    id: 719,
    sequel: 0,
    created_at: '2018-01-07 20:29:38.0',
    city_name: '',
    cours_id: 17,
    title: 'Fate/EXTRA Last Encore',
    city_code: 0,
    title_short3: '',
    updated_at: '2018-01-07 20:29:38.0' } ]
```