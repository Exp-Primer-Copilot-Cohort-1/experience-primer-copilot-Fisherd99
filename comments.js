//create a web server
var http = require('http');

//create a web server
var server = http.createServer(function(req, res) {
    //get the comments module
    var comments = require('./comments');
    //set the response content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //send the comments to the client
    res.end(JSON.stringify(comments.getComments()));
});

//listen on port 3000
server.listen(3000);

console.log('Server running at http://localhost:3000/');

// Path: comments.js
//comments module
var comments = [
    { name: 'John', comment: 'Hello!' },
    { name: 'Jane', comment: 'Hi!' },
    { name: 'Jack', comment: 'Goodbye!' }
];

//export the comments array
exports.getComments = function() {
    return comments;
};