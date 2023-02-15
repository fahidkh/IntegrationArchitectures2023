const environment = {
    production: false,
    port: 8080,
    defaultAdminPassword: 'c3uz#3zd',
    db:{
        host: 'iar-mongo.inf.h-brs.de',
        port: 27017,
        username: 'team_11',
        password: 'team_11!',
        authSource: 'team_11',
        name: 'team_11'
    },
    corsOrigins: [
        'http://localhost:4200'
    ]
};

exports.default = environment;
