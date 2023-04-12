"use strict";

const express = require('express');
const path = require('path');
const port = 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./server/config');
const cors = require('cors');

// Connect to the database and load models
require('./server/models').connect(config.dbUri);

const compression = require('compression'); // Compression middleware, compress responses from all routes
const helmet = require('helmet'); // Protect against web vunerablities, http headers, https://www.npmjs.com/package/helmet



const app = express();

app.use(cors());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true}));
app.use(compression());
app.use(helmet());
app.use(cookieParser());

app.use(compression());
app.use(cors());


// Use the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// View engine setup
// app.set('views', path.join(__dirname, '/server/views'));
// app.set('view engine', 'pug');

// Serve static assets normally

// app.use(express.static(path.join(__dirname, 'view/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/view/build/index.html'))
// });

app.use('/auth', require('./server/routes/auth'));
app.use('/api', require('./server/routes/api'));

// Catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Single page app method for 404s, return the static html file
// Handles all routes so you do not get a not found error

// app.use(express.static(path.join(__dirname, 'view/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/view/build/index.html'))
// });
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({message: '404 Catch Unauthorised Errors'});
  }
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({message: '500 Error'});
});

/**
 * Listen on provided port, on all network interfaces.
 */
const http = require('http').createServer(app);
http.listen(port);
console.log('Server started on port ' + port);
