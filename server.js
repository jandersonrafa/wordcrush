// const path = require('path');
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 8080;
// const httpProxy = require('http-proxy'),


// app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/dist/index.html');
// });

// app.listen(PORT, error => (
//   error
//     ? console.error(error)
//     : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
// ));
// var express = require('express');
// var app = express();
// var httpProxy = require('http-proxy');
// var proxy = httpProxy.createProxyServer({});
// const PORT = process.env.PORT || 8080;
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'dist')));
// // app.get('/', function(request, response) {
// // response.sendFile(__dirname + '/dist/index.html');
// // });
// app.get('/api/*', function(req, res) {
//     "use strict";
//     return proxy.proxyRequest(req, res, {
//         host: "localhost",
//         port: 5000
//     });
// });

// app.listen(PORT);

// var express = require('express');
// const path = require('path');

// var app = express();
//     const PORT = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, 'dist')));
// // app.use(express.static(__dirname + '/dist/index.html'));
// // app.use(app.router);

// app.get('*', function(req, res){
//     res.redirect(302, 'http://localhost:5000' + req.path);
// });

// app.listen(PORT);


var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'https://wordcrush-back.herokuapp.com';
const PORT  = process.env.PORT || 8080;


const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.all("/api/*", function (req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, { target: serverOne });
});

app.listen(PORT);