// ../ -> blog/controllers

var index = require('../controllers');
app.get('/', index.home);
admin.get('/', index.dashboard);

// Articles
require('./articles');

// Users
// ...

// Products
// ...