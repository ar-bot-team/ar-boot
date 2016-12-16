var Widget = require('./widget');

module.exports = {
    getUserListWidget: function getRedWidget() {
        console.log(sessions);
        const recipientId = sessions[sessionId].fbid;
        fb.fbMessage(recipientId, text, true);

        return widget;
    }
}