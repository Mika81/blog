// blog/controllers/articles.js

// Récupérer un article
exports.findOne = function (req, res) {
    var id = req.params.id;

    models.Article.findOne({
        _id: id
    }, function (err, article) {
        /*        if (!err) {
                    res.render('page', {message: "Introuvable"})
                }*/
        /*        res.json(article);*/
    });
    res.render('admin/article/details');
};

// Récupérer tous les articles
exports.findAll = function (req, res) {
    models.Article.find()
                  .sort({title: -1})
                  .exec(function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.render('admin/article/list', {articles: articles});
        }
    });
};

// Ajouter, créer un nouvel article
exports.add = function (req, res) {
    var articleForm = {
        title: req.body.title || "",
        author: req.body.author || "",
        teaser: req.body.teaser || "",
        content: req.body.content || "",
        published: req.body.published || "",
        created: new Date()
    };

    if (req.method === 'POST') {
        var article = new models.Article(articleForm);
        article.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/admin/blog');
            }
        });
    } else {
        res.render('admin/article/form');
    }
};

// Mettre à jour un article
exports.update = function (req, res) {
    var options = {_id: req.params.id};

    if (req.method === 'POST') {
        console.log(req.body);
        models.Article.update(options, req.body, function (err) {
            res.redirect('/admin/blog');
        });
    } else {
        models.Article.findOne(options, function (err, article) {
            res.render('admin/article/form', {"form": article });
        });
    }
};

// Supprimer un article
exports.delete = function (req, res) {
    models.Article.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            console.log(err);
        }
        res.redirect('/admin/blog');
    });
};





