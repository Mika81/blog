/*
 * routes/index.js
*/

var index = require('../controllers');
app.get('/', index.home);

// Articles
require('./articles');