var Tag = require('../repositories/tags');

module.exports = function(router) {
  router.route('/tags')
    .get(async function(req, res) {
      tags = await Tag.getTags();
      if(tags)
        res.send(tags);
    })
    .post(async function(req, res) {
      //Data Validation
      console.log(req.body.tag);
      var newTag = await Tag.addTag(req.body.tag);
      if(newTag)
        res.send('Tag added successfully !');
      else res.send('Failed adding Tag !');
    });

  router.route('/tags/:id')
    .get(async function(req, res) {
      tag = await Tag.getTag(req.params.id);
      if(tag)
        res.send(tag);
      else res.send('No Tag found with this ID !');
    })
    .put(async function(req, res) {
      //Data Validation
      console.log(req.params.id, req.body.tag);
      var updatedTag = await Tag.updateTag(req.params.id, req.body.tag);
      if(updatedTag)
        res.send('Tag updated successfully !');
      else res.send('Failed updating Tag !');
    })
    .delete(async function(req, res) {
      console.log(req.params.id);
      var deletedTag = await Tag.deleteTag(req.params.id);
      if(deletedTag)
        res.send('Tag deleted successfully !');
      else res.send('Failed deleting Tag !');
    });
}