// blog/schemas/article.js

// Article
exports.schema = new mongoose.Schema({
    title: {type: String, maxlength: 255},
    author: {type: String, maxlength: 100},
    teaser: String,
    content: String,
    published: Boolean,
    created: Date,
    updated: { type: Date, default: Date.now }
});
