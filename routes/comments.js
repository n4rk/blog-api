var Comment = require('../repositories/comments');

module.exports = function(router) {
    router.route('/comments')
    .get(async function(req, res) {
        var comments = await Comment.getComments();
        if(comments)
            res.send(comments);
    })
    .post(async function(req, res) {
        //Data Validation
        var newComment = await Comment.addComment(req.body.comment);
        if(newComment)
            res.send('Comment added successfully !');
        else res.send('Failed adding Comment !');
    });

    router.route('/comments/users/:userID').get(async function(req, res) {
        var comment = await Comment.getCommentsByUserId(req.params.userID);
        if(comment)
            res.send(comment);
        else res.send('No Comment found for a User having this ID !');
    });
    router.route('/comments/articles/:articleID').get(async function(req, res) {
        var comment = await Comment.getCommentsByArticleId(req.params.articleID);
        if(comment)
            res.send(comment);
        else res.send('No Comment found for an Article having this ID !');
    });

    router.route('/comments/:id')
    .get(async function(req, res) {
        var comment = await Comment.getComment(req.params.id);
        if(comment)
            res.send(comment);
        else res.send('No Comment found with this ID !');
    })
    .put(async function(req, res) {
        //Data Validation
        var updatedComment = await Comment.updateComment(req.params.id, req.body.comment);
        if(updatedComment)
            res.send('Comment updated successfully !');
        else res.send('Failed updating Comment !');
    })
    .delete(async function(req, res) {
        var deletedComment = await Comment.deleteComment(req.params.id);
        if(deletedComment)
            res.send('Comment deleted successfully !');
        else res.send('Failed deleting Comment !');
    });
}