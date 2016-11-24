'use strict';

// Wit.ai parameters

const Wit = require('node-wit').Wit;
const log = require('node-wit').log;


// ----------------------------------------------------------------------------
// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}



function actionHandlers(opts) {

// Our bot actions
return actions = {
  send({sessionId}, {text}) {
    // Our bot has something to say!
    // Let's retrieve the Facebook user whose session belongs to
    const recipientId = opts.sessions[sessionId].fbid;
    if (recipientId) {
      // Yay, we found our recipient!
      // Let's forward our bot response to her.
      // We return a promise to let our bot know when we're done sending
      return opts.fbMessage(recipientId, text)
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

  getForecast({context, entities}) {
    return new Promise(function(resolve, reject) {
      // Here should go the api call, e.g.:
      // context.forecast = apiCall(context.loc)
      context.forecast = 'sunny';
      return resolve(context);
    });
  }
};

// Setting up our bot

};
module.exports.execute = function witClient(WIT_TOKEN, actions) {
   return new Wit({
	  accessToken: WIT_TOKEN,
	  actions,
	  logger: new log.Logger(log.INFO)
	});	
};


module.exports.actionHandlers = actionHandlers;