const bcrypt = require('bcryptjs');

module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert(
            'users',
            [
                {
                    name: 'Administrador',
                    email: 'admin@gympoint.com',
                    status: true,
                    password_hash: bcrypt.hash('123456', 8),
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
