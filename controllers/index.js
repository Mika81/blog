
// blog/controllers.js

// Public home
exports.home = function (req, res) {
    res.send('Hello Home');
};

// Admin dashboard
exports.dashboard = function (req, res) {
    res.render('admin/dashboard');
}