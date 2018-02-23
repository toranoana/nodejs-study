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