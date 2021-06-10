var User = require('../repositories/users');

/* GET users listing. */
module.exports = function(router) {
  router.route('/users')
    .get(async function(req, res) {
      users = await User.getAllUsers();
      if(users)
        res.send(users);
    })
    /* POST Add a user */
    .post(async function(req, res) {
      console.log(req.body);
      var createdUser = await User.addUser(req.body);
      if(createdUser)
        res.send('User added successfully !');
      else res.send('Failed adding user !');
    })

  /* GET user by id. */
  router.route('/users/:id')
    .get(async function(req, res) {
      user = await User.getUser(req.params.id);
      if(user)
        res.send(user);
      else res.send('No user found with this ID !');
    });
}