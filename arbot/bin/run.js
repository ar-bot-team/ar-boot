'use strict';

const config = require('config-node')();
const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');
const server = http.createServer(service);

const witToken = config.wit.token;
const witClient = require('../server/witClient.js')(witToken);

// const token = 'xoxb-105442566833-LKk4XMhpab4An6kYKrbu25gY'
const token = config.slack.token;
const logLevel = 'verbose';

const serviceRegistry = service.get('serviceRegistry');
const rtm = slackClient.init(token, logLevel, witClient, serviceRegistry);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000));

server.on('listening', function () {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')}`);
});
