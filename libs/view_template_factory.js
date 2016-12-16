var Widget = require('./widget');

module.exports = {
    getUserListWidget: function getRedWidget() {
        const recipientId = sessions[sessionId].fbid;
        fb.fbMessage(recipientId, text, true);
    }
}