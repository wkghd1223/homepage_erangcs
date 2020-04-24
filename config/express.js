module.exports = function(){
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
        
    var app = express();
    
    // view engine setup
    // app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    app.locals.pretty = true;

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    return app;
}


