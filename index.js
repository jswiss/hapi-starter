const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 3000
}); // tell hapi which TCP Port to "listen" on

server.route({
  method: 'GET',
  path: '/{josh*}', // this is how you capture route params in Hapi
  handler: function (req, reply) {
    console.log(req.params);
    reply(`Hello ${req.params.josh}!`); // reply with text
  }
});


server.start(() => { //will hstart Hapi server on your port
  console.log(`Now visit: http://localhost:${server.info.port}/josh`);
});