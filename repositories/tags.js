var { Tag } = require('../models');
module.exports = {
    getAllTags() {
        return Tag.findAll();
    },
    getTags(offset=0, limit=10) {
        return Tag.findAll({offset:offset, limit:limit});
    },
    getTag(id) {
        return Tag.findOne({
            where: {
                id: id
            }
        });
    },
    getTagsByArticleId(articleID) {
        return Tag.findAll({
            where: {
                ArticleId : articleID
            }
        });
    },
    addTag(tagData) {
        var tag = Tag.create(tagData)
        return tag;
    },
    updateTag(id, tagData) {
        return Tag.update(tagData, {
            where: {
                id: id
            }
        });
    },
    deleteTag(id) {
        return Tag.destroy({
            where: {
                id: id
            }
        });
    }
}