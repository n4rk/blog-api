var Article = require('../repositories/articles');

module.exports = function(router) {
    router.route('/articles')
    .get(async function(req, res) {
        var articles = await Article.getArticles();
        if(articles)
            res.send(articles);
    })
    .post(async function(req, res) {
        //Data Validation
        var newArticle = await Article.addArticle(req.body.article);
        if(newArticle)
            res.send('Article added successfully !');
        else res.send('Failed adding Article !');
    });

    router.route('/articles/published').get(async function(req, res) {
        var articles = await Article.getPublishedArticles();
        if(articles)
            res.send(articles);
    });

    router.route('/articles/users/:userID')
    .get(async function(req, res) {
        var article = await Article.getArticlesByUserId(req.params.userID);
        if(article)
            res.send(article);
        else res.send('No Articles found for a User with this ID !');
    })

    router.route('/articles/:id')
    .get(async function(req, res) {
        var article = await Article.getArticle(req.params.id);
        if(article)
            res.send(article);
        else res.send('No Article found with this ID !');
    })
    .put(async function(req, res) {
        //Data Validation
        var updatedArticle = await Article.updateArticle(req.params.id, req.body.article);
        if(updatedArticle)
            res.send('Article updated successfully !');
        else res.send('Failed updating Article !');
    })
    .delete(async function(req, res) {
        var deletedArticle = await Article.deleteArticle(req.params.id);
        if(deletedArticle)
            res.send('Article deleted successfully !');
        else res.send('Failed deleting Article !');
    });
}