
// /**
//  * Module dependencies.
//  */

// var express = require('express');
// var http = require('http');
// var path = require('path');
// // var handlebars = require('express3-handlebars')

// // var index = require('./routes/index');
// // Example route
// // var user = require('./routes/user');

// var app = express();

// // all environments
// app.set('port', process.env.PORT || 5000);
// // app.set('views', path.join(__dirname, 'src'));
// // app.engine('handlebars', handlebars());
// // app.set('view engine', 'html');
// app.use('/', express.static('src'));
// // app.use(express.favicon());
// // app.use(express.logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded());
// // app.use(express.methodOverride());
// // app.use(express.cookieParser('Intro HCI secret key'));
// // app.use(express.session());
// // app.use(app.router);
// // app.use(express.static(path.join(__dirname, 'public')));

// // development only
// // if ('development' == app.get('env')) {
// //   app.use(express.errorHandler());
// // }

// // Add routes here
// app.get('/', function(request, response) {
//   response.render('index.html')
// });
// // Example route
// // app.get('/users', user.list);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });

const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '/index.html');
    const publicPath = express.static(path.join(__dirname, '/dist'));

    app.use('/dist', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    return app;
  }
}