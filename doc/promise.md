# Promiseの使い方

## ソースコード
* promise.js
```
console.log('START');

syncWait()
.then(syncWait)
.then(syncWait)
.then(function() {
    console.log('END');
});

function syncWait() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('1秒経過');
            resolve();
        }, 1000);
    });
}
```

## 起動方法
`node promise.js`

## 実行結果
```
$ node promise.js
START
1秒経過
1秒経過
1秒経過
END
```