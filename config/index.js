var config = null;

function loadConf() {
    var env = app.get('env') || 'production';
    if (config === null) {
        config = require(__dirname + path.sep + env + ".json");
    }
    return config;
}

module.exports = loadConf();