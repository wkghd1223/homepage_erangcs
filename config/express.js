module.exports = function(){
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
        
    var app = express();
    
    app.use(express.static( 'public'));
    // view engine setup
    // app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.locals.pretty = true;

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    return app;
}


