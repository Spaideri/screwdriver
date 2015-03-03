var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register({register: require('./modules/idm')}, function (err) {
    if (err) {
        console.error('Failed to load plugin:', err);
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
