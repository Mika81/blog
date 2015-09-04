/**
 * Blog Application
 */

// Inclusion
path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var basicAuth = require('basic-auth-connect');
var morgan = require('morgan');
mongoose = require('mongoose');

// Create application
app = express();
config = require(path.join(__dirname, 'config'));
admin = express();

// Settings
mongoose.connect(config.db.default.driver);
app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', config.app.view.engine);
app.locals.pretty = config.app.view.pretty;
admin.locals.pretty = true;

// Body Parser
admin.use(bodyParser.urlencoded({ extended: false }))

// Authentication
admin.use(basicAuth('admin', '0000'));

// Models
models = require(path.join(__dirname, 'models/articles'));

// Routing
require(path.join(__dirname, 'routes'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', admin);

// Running...
app.listen(config.server.http_port);
