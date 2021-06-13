var User = require('../repositories/users');

module.exports = function(router) {
  router.route('/users')
    .get(async function(req, res) {
      var users = await User.getUsers();
      if(users)
        res.send(users);
    })

    .post(async function(req, res) {
      //Data Validation
      var newUser = await User.addUser(req.body.user);
      if(newUser)
        res.send('User added successfully !');
      else res.send('Failed adding user !');
    });

  router.route('/users/:id')
    .get(async function(req, res) {
      var user = await User.getUser(req.params.id);
      if(user)
        res.send(user);
      else res.send('No user found with this ID !');
    })
    .put(async function(req, res) {
      //Data Validation
      var updatedUser = await User.updateUser(req.params.id, req.body.user);
      if(updatedUser)
        res.send('User updated successfully !');
      else res.send('Failed updating user !');
    })
    .delete(async function(req, res) {
      var deletedUser = await User.deleteUser(req.params.id);
      if(deletedUser)
        res.send('User deleted successfully !');
      else res.send('Failed deleting user !');
    })
}