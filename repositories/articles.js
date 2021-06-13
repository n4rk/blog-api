var { Article } = require('../models');
module.exports = {
    getAllArticles() {
        return Article.findAll();
    },
    getArticles(offset=0, limit=10) {
        return Article.findAll({offset:offset, limit:limit});
    },
    getArticle(id) {
        return Article.findOne({
            where: {
                id: id
            }
        });
    },
    getArticlesByUserId(userID) {
        return Article.findAll({
            where: {
                UserId: userID
            }
        });
    },
    getPublishedArticles() {
        return Article.findAll({
            where: {
                published: 1
            }
        });
    },
    addArticle(articleData) {
        var article = Article.create(articleData)
        return article;
    },
    updateArticle(id, articleData) {
        return Article.update(articleData, {
            where: {
                id: id
            }
        });
    },
    deleteArticle(id) {
        return Article.destroy({
            where: {
                id: id
            }
        });
    }
}