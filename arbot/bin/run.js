'use strict'
const slackClient = require('../server/slackClient')
const service = require('../server/service')
const http = require('http')
const server = http.createServer(service)

const witToken = 'M7LCV5EBGW6KL4NRGIN2UZM4HPANCPCD'
const witClient = require('../server/witClient.js')(witToken)

//const token = 'xoxb-105442566833-LKk4XMhpab4An6kYKrbu25gY'
const token = 'xoxb-107516744134-KpFOiROw4JLVov6VAJNgnD3I'
const logLevel = 'verbose'

const serviceRegistry = service.get('serviceRegistry')
const rtm = slackClient.init(token, logLevel, witClient, serviceRegistry)
rtm.start()

slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000))

server.on('listening', function () {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')}`)
})
