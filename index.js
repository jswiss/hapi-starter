const Hapi = require('hapi');
const Joi = require('joi');
const server = new Hapi.Server();


server.connection({
  port: 3000
}); // tell hapi which TCP Port to "listen" on

server.route({
  method: 'GET',
  path: '/{yourname*}', // this is how you capture route params in Hapi
  config: {
    validate: {
      params: {
        yourname: Joi.string().min(2).max(40).alphanum().required()
      }
    },
    handler: function (req, reply) {
      console.log(req.params);
      reply(`Hello ${req.params.yourname}!`); // reply with text
    },
  }
});


server.start(() => { //will hstart Hapi server on your port
  console.log(`Now visit: http://localhost:${server.info.port}/yourname`);
});