// blog/controllers.js

// Public home
exports.home = function (req, res) {
    models.Article.find()
        .sort({
            title: -1
        })
        .exec(function (err, articles) {
            if (err) {
                console.log(err);
            } else {
                res.render('home', {
                    articles: articles
                });
            }
        });
};

// Admin dashboard
exports.dashboard = function (req, res) {
    res.render('admin/dashboard');
}