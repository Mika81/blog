/*
 * routes/articles.js
 * On y associe les fonctions aux routes
 */

var articles = require('../controllers/articles');

// Espace public
app.get('/blog', articles.findAll);
app.get('/blog/articles/:id', articles.findOne);

// Espace sécurisé
// Préfixé par admin == /admin/blog/
admin.get('/blog', articles.findAll);
admin.get('/blog/articles/add', articles.add);
admin.get('/blog/articles/:id', articles.findOne);
admin.post('/blog/articles/update/:id', articles.update);
admin.get('/blog/articles/delete/:id', articles.delete);