/**
 * Main applicaiton
 */
// @ts-nocheck
const createError = require('http-errors');

const express = require('express');

const path = require('path');

const cookieParser = require('cookie-parser');

const logger = require('morgan');

const indexRouter = require('./routes/index');

const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev')); // view engine setup

app.use(express.json()); // json parser

app.use(express.urlencoded({ extended: false })); // simple ULR encoding

app.use(cookieParser()); // parse cookies

app.use(express.static(path.join(__dirname, 'data'))); // data folder

app.use('/', indexRouter); // index router

app.use('/api', apiRouter); // api router

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
