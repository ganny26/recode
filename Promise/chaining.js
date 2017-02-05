var promise = new Promise(function(resolve, reject) {
    resolve(10);
});

promise.then(function(val) {
    console.log(val);
    return val + 20;
}).then(function(val) {
    console.log(val);
    return val + 30;
}).then(function(val) {
    console.log(val);
})