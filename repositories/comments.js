var { Comment } = require('../models');
module.exports = {
    getAllComments() {
        return Comment.findAll();
    },
    getComments(offset=0, limit=10) {
        return Comment.findAll({offset:offset, limit:limit});
    },
    getComment(id) {
        return Comment.findOne({
            where: {
                id: id
            }
        });
    },
    getCommentsByUserId(userID) {
        return Comment.findAll({
            where: {
                UserId : userID
            }
        });
    },
    getCommentsByArticleId(articleID) {
        return Comment.findAll({
            where: {
                ArticleId : articleID
            }
        });
    },
    addComment(commentData) {
        var comment = Comment.create(commentData)
        return comment;
    },
    updateComment(id, commentData) {
        return Comment.update(commentData, {
            where: {
                id: id
            }
        });
    },
    deleteComment(id) {
        return Comment.destroy({
            where: {
                id: id
            }
        });
    }
}