/**
 * Main applicaiton
 */
// @ts-nocheck
const
  createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  indexRouter = require('./routes/index'),
  apiRouter = require('./routes/api'),
  app = express();

app.use(logger('dev')); // view engine setup
app.use(express.json()); // json parser
app.use(express.urlencoded({ extended: false })); // simple ULR encoding
app.use(cookieParser()); // parse cookies
app.use(express.static(path.join(__dirname, 'data'))); // data folder
app.use('/', indexRouter); // index router
app.use('/api', apiRouter); // api router
app.use((req, res, next) => next(createError(404))); // catch 404 and forward to error handler
app.use(function (err, req, res, next) { // error handler
  res.locals.message = err.message; // set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500); // render the error page
  res.render('error');
});

module.exports = app;
