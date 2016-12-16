'use strict';

// Messenger API integration example
// We assume you have:
// * a Wit.ai bot setup (https://wit.ai/docs/quickstart)
// * a Messenger Platform setup (https://developers.facebook.com/docs/messenger-platform/quickstart)
// You need to `npm install` the following dependencies: body-parser, express, request.
//
// 1. npm install body-parser express request
// 2. Download and install ngrok from https://ngrok.com/download
// 3. ./ngrok http 8445
// 4. WIT_TOKEN=your_access_token FB_APP_SECRET=your_app_secret FB_PAGE_TOKEN=your_page_token node examples/messenger.js
// 5. Subscribe your page to the Webhooks using verify_token and `https://<your_ngrok_io>/webhook` as callback URL.
// 6. Talk to your bot on Messenger!

const bodyParser = require('body-parser');
const crypto = require('crypto');
const express = require('express');
const fetch = require('node-fetch');
const request = require('request');
const fb = require('./libs/face_msg');
const processmaker = require('./libs/connectors/processmaker');
var fs = require("fs");
const _ = require('lodash')
// Get content from file
var contents = fs.readFileSync("libs/assets/config.json");
// Define to JSON type
var config = JSON.parse(contents);
// Get Value from JSON

let Wit = null;
let log = null;
try {
  // if running from repo
  Wit = require('../').Wit;
  log = require('../').log;
} catch (e) {
  Wit = require('node-wit').Wit;
  log = require('node-wit').log;
}

// Webserver parameter
const PORT = process.env.PORT || 8445;

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN;
let FB_VERIFY_TOKEN = 'testbot_verify_token';

  console.log(`/webhook will accept the Verify Token "${FB_VERIFY_TOKEN}"`);
//});

// ----------------------------------------------------------------------------
// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}
const sessions = {};

const findOrCreateSession = (fbid) => {
  let sessionId;
  // Let's see if we already have a session for the user fbid
  Object.keys(sessions).forEach(k => {
    if (sessions[k].fbid === fbid) {
      // Yep, got it!
      sessionId = k;
    }
  });
  if (!sessionId) {
    // No session found for user fbid, let's create a new one
    sessionId = new Date().toISOString();
    sessions[sessionId] = {fbid: fbid, context: {}};
  }
  return sessionId;
};

// Our bot actions
const actions = {
  send({sessionId}, {text}) {
    // Our bot has something to say!
    // Let's retrieve the Facebook user whose session belongs to
    const recipientId = sessions[sessionId].fbid;
    if (recipientId) {
      // Yay, we found our recipient!
      // Let's forward our bot response to her.
      // We return a promise to let our bot know when we're done sending
      return fb.fbMessage(recipientId, text)
      .then(() => null)
      .catch((err) => {
        console.error(
          'Oops! An error occurred while forwarding the response to',
          recipientId,
          ':',
          err.stack || err
        );
      });
    } else {
      console.error('Oops! Couldn\'t find user for session:', sessionId);
      // Giving the wheel back to our bot
      return Promise.resolve()
    }
  },
  // You should implement your custom actions here
  // See https://wit.ai/docs/quickstart
  findProcesses({context, entities}) {
    return new Promise(function(resolve, reject) {
      let i, max, message = '';
      let testMessage = {
        "data": [
        {
          "type": "process",
          "id": "2699d5ac-b3a2-43fe-82ab-4e074cbd53f5",
          "attributes": {
            "name": "Proceso Deshawn Miller",
            "description": null,
            "created_at": {
              "date": "2016-12-15 17:33:09.000000",
              "timezone_type": 3,
              "timezone": "UTC"
            },
            "updated_at": {
              "date": "2016-12-15 17:33:09.000000",
              "timezone_type": 3,
              "timezone": "UTC"
            },
            "parent_process_id": null,
            "status": "DISABLED",
            "type": "SUB_PROCESS",
            "duration_by": "CALENDAR_DAYS",
            "assignment": false,
            "design_access": "PUBLIC",
            "show_map": false,
            "show_message": true,
            "show_delegate": false,
            "show_dynaform": false,
            "category_id": "308c68ca-33b7-47d1-8528-094e955afd6e",
            "sub_category_id": "403e11ba-79b1-46e1-bdf5-6b9c658abec5",
            "create_user_id": "41b2cac5-5d8d-421e-8ddd-1712bf8b6b92",
            "debug": true,
            "dynaform_summary_id": null,
            "derivation_screen_tpl": null,
            "calendar_id": "5b9a04a0-1d4c-4d7b-84f4-02860af9496f"
          }
        },
        {
          "type": "process",
          "id": "3fe93d3a-7427-4e4a-b0bc-638577e90ddd",
          "attributes": {
            "name": "Proceso Miss Adelia Bogisich",
            "description": null,
            "created_at": {
              "date": "2016-12-15 17:33:21.000000",
              "timezone_type": 3,
              "timezone": "UTC"
            },
            "updated_at": {
              "date": "2016-12-15 17:33:21.000000",
              "timezone_type": 3,
              "timezone": "UTC"
            },
            "parent_process_id": null,
            "status": "INACTIVE",
            "type": "SUB_PROCESS",
            "duration_by": "CALENDAR_DAYS",
            "assignment": true,
            "design_access": "PRIVATE",
            "show_map": false,
            "show_message": false,
            "show_delegate": true,
            "show_dynaform": true,
            "category_id": "69e24bc5-60ff-48fd-a1a9-d730d4eca036",
            "sub_category_id": "cbff5d47-ab62-4bac-a64a-b0b0597df289",
            "create_user_id": "c7cf9b9c-97f4-4f65-86e3-09af9988c904",
            "debug": false,
            "dynaform_summary_id": null,
            "derivation_screen_tpl": null,
            "calendar_id": "bd3e7b45-653b-408c-b17b-6e3aa9c6b361"
          }
        } ]};
        for (i = 0, max = testMessage.data.length; i < max; i += 1) {
          message += testMessage.data[i].attributes.name + ' - ';
        }
        //context.process = (entities.view[0].value === 'view') ? message.substring(0, message.length - 3) : 'do you want to list it?';
      context.process = message.substring(0, message.length - 3);
      return resolve(context);
    });
  },

  getProcess({context, entities}) {
    return new Promise(function(resolve, reject) {
      let mensaje = "Hi dear Processmaker user what can I do for you?";
      context.sayHello = mensaje;
      return resolve(context);
    });
  },
  getForecast({context, entities}) {
    return new Promise(function(resolve, reject) {
      // Here should go the api call, e.g.:
      // context.forecast = apiCall(context.loc)
      context.forecast = '{}';
      return resolve(context);
    });
  }
};

// Setting up our bot
const wit = new Wit({
  accessToken: WIT_TOKEN,
  actions,
  logger: new log.Logger(log.INFO)
});

// Starting our webserver and putting it all together
const app = express();
app.use(({method, url}, rsp, next) => {
  rsp.on('finish', () => {
    console.log(`${rsp.statusCode} ${method} ${url}`);
  });
  next();
});
app.use(bodyParser.json({ verify: fb.verifyRequestSignature }));


// Webhook setup
app.get('/webhook', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === FB_VERIFY_TOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});

// Message handler
app.post('/webhook', (req, res) => {
    var tplObj = null;
  // Parse the Messenger payload
  // See the Webhook reference
  // https://developers.facebook.com/docs/messenger-platform/webhook-reference
  const data = req.body;

  if (data.object === 'page') {
    data.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && !event.message.is_echo) {
          // Yay! We got a new message!
          // We retrieve the Facebook user ID of the sender
          const sender = event.sender.id;

          // We retrieve the user's current session, or create one if it doesn't exist
          // This is needed for our bot to figure out the conversation history
          const sessionId = findOrCreateSession(sender);

          // We retrieve the message content
          const {text, attachments} = event.message;


          if (attachments) {
            // We received an attachment
            // Let's reply with an automatic message
            fb.fbMessage(sender, 'Sorry I can only process text messages for now.')
            .catch(console.error);
          } else if (text) {
              //tplObj = _.find(config, 'message', text);
              tplObj = _.find(config, function (o) { return o.message === text});
              if (_.isObject(tplObj) &&_.includes(text, tplObj.message)) {
                  const recipientId = sessions[sessionId].fbid;

                  fb.fbMessage(recipientId, text, true, tplObj);
              }  else {
                  sendMsgToWit(sessionId, text);
              }
          }
        } else {
          console.log('received event', JSON.stringify(event));
        }
      });
    });
  }
  res.sendStatus(200);
});



function sendMsgToWit(sessionId, text){
    // We received a text message

    // Let's forward the message to the Wit.ai Bot Engine
    // This will run all actions until our bot has nothing left to do
    wit.runActions(
        sessionId, // the user's current session
        text, // the user's message
        sessions[sessionId].context // the user's current session state
    ).then((context) => {
        // Our bot did everything it has to do.
        // Now it's waiting for further messages to proceed.
        console.log('Waiting for next user messages');

    // Based on the session state, you might want to reset the session.
    // This depends heavily on the business logic of your bot.
    // Example:
    // if (context['done']) {
    //   delete sessions[sessionId];
    // }

    // Updating the user's current session state
    sessions[sessionId].context = context;
    })
    .catch((err) => {
        console.error('Oops! Got an error from Wit: ', err.stack || err);
    })
}

app.listen(PORT);
console.log('Listening on :' + PORT + '...');

function setProcessToList() {
  let i, max, message = '';
  let arrayText = [], description,
  testMessage = {
    "data": [
    {
      "type": "process",
      "id": "2699d5ac-b3a2-43fe-82ab-4e074cbd53f5",
      "attributes": {
        "name": "Proceso Deshawn Miller",
        "description": null,
        "created_at": {
          "date": "2016-12-15 17:33:09.000000",
          "timezone_type": 3,
          "timezone": "UTC"
        },
        "updated_at": {
          "date": "2016-12-15 17:33:09.000000",
          "timezone_type": 3,
          "timezone": "UTC"
        },
        "parent_process_id": null,
        "status": "DISABLED",
        "type": "SUB_PROCESS",
        "duration_by": "CALENDAR_DAYS",
        "assignment": false,
        "design_access": "PUBLIC",
        "show_map": false,
        "show_message": true,
        "show_delegate": false,
        "show_dynaform": false,
        "category_id": "308c68ca-33b7-47d1-8528-094e955afd6e",
        "sub_category_id": "403e11ba-79b1-46e1-bdf5-6b9c658abec5",
        "create_user_id": "41b2cac5-5d8d-421e-8ddd-1712bf8b6b92",
        "debug": true,
        "dynaform_summary_id": null,
        "derivation_screen_tpl": null,
        "calendar_id": "5b9a04a0-1d4c-4d7b-84f4-02860af9496f"
      }
    },
    {
      "type": "process",
      "id": "3fe93d3a-7427-4e4a-b0bc-638577e90ddd",
      "attributes": {
        "name": "Proceso Miss Adelia Bogisich",
        "description": null,
        "created_at": {
          "date": "2016-12-15 17:33:21.000000",
          "timezone_type": 3,
          "timezone": "UTC"
        },
        "updated_at": {
          "date": "2016-12-15 17:33:21.000000",
          "timezone_type": 3,
          "timezone": "UTC"
        },
        "parent_process_id": null,
        "status": "INACTIVE",
        "type": "SUB_PROCESS",
        "duration_by": "CALENDAR_DAYS",
        "assignment": true,
        "design_access": "PRIVATE",
        "show_map": false,
        "show_message": false,
        "show_delegate": true,
        "show_dynaform": true,
        "category_id": "69e24bc5-60ff-48fd-a1a9-d730d4eca036",
        "sub_category_id": "cbff5d47-ab62-4bac-a64a-b0b0597df289",
        "create_user_id": "c7cf9b9c-97f4-4f65-86e3-09af9988c904",
        "debug": false,
        "dynaform_summary_id": null,
        "derivation_screen_tpl": null,
        "calendar_id": "bd3e7b45-653b-408c-b17b-6e3aa9c6b361"
      }
    } ]};
    for (i = 0, max = testMessage.data.length; i < max; i += 1) {
      description = (testMessage.data[i].attributes.description === null) ? 'Created by Processmaker' : testMessage.data[i].attributes.description;
      arrayText.push({
            "title": testMessage.data[i].attributes.name,
            "subtitle": description,
            "image_url": "https://pbs.twimg.com/profile_images/621332085136064514/vs-n_aGQ.jpg",
            "buttons": [{
                "type": "web_url",
                "url": "https://www.messenger.com",
                "title": "Start Process"
            }, {
                "type": "postback",
                "title": "View details",
                "payload": "Payload for first element in a generic bubble",
            }],
      });
      message += testMessage.data[i].attributes.name + ' - ';
    }
    return arrayText;
}
