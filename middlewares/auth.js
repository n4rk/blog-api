var jwt = require('jsonwebtoken');
var User = require('../repositories/users');

module.exports = async function(req, res, next) {
    // if(!req.body.token)
    //   return res.status(400).send({
    //     message: 'Access Denied'
    //   });
    jwt.verify(req.body.token, 'privateKey', async function(err, decoded) {
        if(!err) {
            var user = await User.getUser(decoded.id);
            if(user) {
                req.user = user;
                return next();
            }
        }
        return res.status(401).send({
            message: 'Unauthorized Access Token'
        });    
    })
}