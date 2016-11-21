'use strict'

const TeleBot = require('telebot');
const bot = new TeleBot('251123752:AAGFrJFOxIGWy4qznt_ToNTYU7Xey4EPy1k');

bot.on('text', msg => {
    let fromId = msg.from.id;
    let firstName = msg.from.first_name;
    let reply = msg.message_id;
    return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
});

bot.connect();