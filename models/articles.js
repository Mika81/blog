/*
 * models/articles.js
 */

var articles = require('../schemas/articles');

exports.Article = mongoose.model('Article', articles.schema);
