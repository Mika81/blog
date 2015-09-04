// blog/routes/articles.js

var articles = require('../controllers/articles');

// Espace public
app.get('/blog', articles.findAll);
app.get('/blog/articles/:id', articles.findOne);

// Espace sécurisé
// Préfixé par admin == /admin/blog
admin.get('/blog', articles.findAll);

admin.route('/blog/articles/add')
     .get(articles.add)
     .post(articles.add);

admin.get('/blog/articles/:id', articles.findOne);
admin.route('/blog/articles/update/:id')
     .get(articles.update)
     .post(articles.update);

admin.get('/blog/articles/delete/:id', articles.delete);
