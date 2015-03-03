exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/authenticate',
        handler: function (request, reply) {
            return reply.proxy({ host: 'idm.screwdriver.com', port: 443, protocol: 'https' });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'screwdriver-adapter-idm',
    version: '1.0.0'
};
