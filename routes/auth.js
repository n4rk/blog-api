var User = require('../repositories/users');
var jwt = require('jsonwebtoken');

module.exports = function(router) {
    router.post('/auth', async function(req, res) {
        var user = await User.getUserByEmail(req.body.email);
        if(user) {
            if(user.password == req.body.password) {
                var token = jwt.sign({id:user.id}, 'privateKey');
                return res.status(200).send ({
                    message:'Auth Succeeded.',
                    token: token
                })
            }
        }
        return res.status(400).send({
            message:'Auth Failed ! Email or Password incorrect.'
        })
    });
}