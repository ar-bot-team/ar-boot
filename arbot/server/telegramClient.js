'use strict';

const TeleBot = require('telebot');

let rtm = null;
let nlp = null;
let registry = null;

function handleOnMessage(message) {
    if (message.text.toLowerCase().includes('arbot')) {
        nlp.ask(message.text, (err, res) => {
            let id = message.from.id;
            if (err) {
                console.log(err);
                return;
            }

            try {
                if (!res.intent || !res.intent[0] || !res.intent[0].value) {
                    throw new Error("Could not extract intent.");
                }
                const intent = require('./intents/' + res.intent[0].value + 'Intent');
                intent.process(res, registry, function (error, response) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    return rtm.sendMessage(id, response);
                });
            } catch (err) {
                console.log(err);
                console.log(res);
                rtm.sendMessage(id, "Sorry, I don't know what you are talking about!");
            }
        });
    }
}

module.exports.init = function telegramClient(token, nlpClient, serviceRegistry) {
    rtm = new TeleBot(token);
    nlp = nlpClient;
    registry = serviceRegistry;
    rtm.on('text', handleOnMessage);
    return rtm;
};
