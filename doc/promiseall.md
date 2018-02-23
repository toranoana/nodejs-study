# Promise.allの使い方

## ソースコード
* promiseall.js
```
console.log('START');

Promise.all([syncWait(), syncWait(), syncWait()])
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
`node promiseall.js`

## 実行結果
全てのスリープが並列に実行されるため、「1秒経過」がほぼ同時に出力されます。
```
$ node promiseall.js
START
1秒経過
1秒経過
1秒経過
END
```