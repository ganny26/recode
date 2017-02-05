'use strict'

const myUrl = "response.json";

function getResponse(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', myUrl);

        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.response);
            } else {
                reject(Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(Error(xhr.statusText));
        };

        xhr.send();
    });
}

getResponse(myUrl).then(function(response) {
    return JSON.parse(response);
}).then(function(response) {
    document.write(response.album);
}, function(error) {
    document.write(error);
});