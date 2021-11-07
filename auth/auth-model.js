const db = require('../database/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
}

//Registration
//Find user by id
function findById(id) {
    return db('users')
        .where({ id })
        .first
};

//Add new user
function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}


//Login
//Find user by argument
function findBy(filter) {
    return db('users')
        .where(filter)
}

//find all users
function find() {
    return db('users')
}

//Delete user by id
function remove(id) {
    return find()
        .where('id', id)
        .del()
}
