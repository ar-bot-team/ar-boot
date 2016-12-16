const userList = require('./userList').userList;
const _ = require('lodash');

var elem = [],
    user,
    i,
    users = _.get(userList, 'data');
for (i = 0; i < users.length; i += 1){
    user = users[i];
    elem.push({
            "title": user.attributes.firstname + ' ' + user.attributes.lastname ,
            "image_url": "https://www.processmaker.com/sites/all/themes/pmthemev2/img/white-badge.png",
            "subtitle": user.attributes.email,
            "buttons": [
                {
                    "title": "View Details",
                    "type": "web_url",
                    "url": "https://processmaker.com",
                    //"messenger_extensions": true,
                    "webview_height_ratio": "tall"
                    //"fallback_url": "https://processmaker.com"
                }
            ]
        });
}

exports.tpl = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "elements": elem,

            "buttons": [
                {
                    "title": "View More",
                    "type": "postback",
                    "payload": "payload"
                }
            ]
        }
    }
};
