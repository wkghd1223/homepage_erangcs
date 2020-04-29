var app = require('./config/express')();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
var facilityRouter = require('./routes/facility');
var safetyRouter = require('./routes/safety');
var disinfectRouter = require('./routes/disinfect');
var cleaningRouter = require('./routes/cleaning');



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company',companyRouter);
app.use('/facility',facilityRouter);
app.use('/safety',safetyRouter);
app.use('/disinfect',disinfectRouter);
app.use('/cleaning',cleaningRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;