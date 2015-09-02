/*
 * controllers/articles.js
 * Inclut les fonctions CRUD
*/

// Chercher un article
exports.findOne = function (req, res){
    var id = req.params.id;
    
    models.Article.findOne({_id: id}, function (err, article) {
        res.json(article);  
    });
};

// Récupérer tous les articles
exports.findAll = function (req, res){
    res.send('FindAll');
};

// Ajouter un nouvel article
exports.add = function (req, res) {
    var article = new models.Article({
        title: "Mon premier article",
        author: "Joe Dalton", 
        teaser: "Joe est un escrocs parce qu'il est ...",
        content: "Joe Dalton entre au ...",
        published: true,
        created: new Date()
    });
    res.send('Add');
};

// Mettre à jour un article
exports.update = function (req, res) {
    res.send('Update');
};

// Supprimer un article
exports.delete = function (req, res) {
    res.send('Delete');
};