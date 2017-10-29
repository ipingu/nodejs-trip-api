var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
bluebird.promisifyAll(mongoose);
var cors = require('cors')

import morgan from 'morgan';

var index = require('./routes/index.routes');
var trips = require('./routes/trips.routes');

mongoose.connect('mongodb://api:api42api@ds125255.mlab.com:25255/tale-us');

var app = express();
app.use(cors());
app.options('*', cors());
// Logger that outputs all requests into the console
app.use(morgan('combined'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/trips', trips);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log("Error middleware", err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500);
  res.send(err);
});

module.exports = app;
