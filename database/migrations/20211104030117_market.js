
exports.up = function(knex) {
    return knex.schema
        .createTable('users', users => {
            //id
            users.increments();

            //username --> string --> unique --> notNullable
            users
                .string('username', 156)
                .notNullable()
                .unique();

            //password --> string --> notNullable()
            users
                .string('password', 156)
                .notNullable();

        }
    )
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
