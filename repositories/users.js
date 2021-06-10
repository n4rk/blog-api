var { User } = require('../models/');
module.exports = {
    getAllUsers() {
        return User.findAll();
    },
    getUsers(offset=0, limit=10) {
        return User.findAll({offset:offset, limit:limit});
    },
    getAdmins() {
        return User.findAll({
            where: {
                role: 'Admin'
            }
        });
    },
    getAuthors() {
        return User.findAll({
            where: {
                role: 'Author'
            }
        });
    },
    getGuests() {
        return User.findAll({
            where: {
                role: 'Guest'
            }
        });
    },
    getUser(id) {
        return User.findOne({
            where: {
                id: id
            }
        });
    },
    getUserByEmail(email) {
        return User.findOne({
            where: {
                email: email
            }
        });
    },
    addUser(userData) {
        if(this.getUserByEmail(userData.email))
            return null;
        var user = User.create(userData)
        return user;
    },
    updateUser(id, userData) {
        return User.update(userData, {
            where: {
                id: id
            }
        });
    },
    deleteUser(id) {
        return User.destroy({
            where: {
                id: id
            }
        });
    }
}