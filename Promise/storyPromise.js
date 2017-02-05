'use strict'

fetch('story.json').then(function(response) {
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Date'));
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.type);
    console.log(response.url);
});