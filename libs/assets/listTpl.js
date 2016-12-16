const userList = require('./userList').userList;
const _ = require('lodash');

ProcessMaker = require('../connectors/processmaker.js')
config = require('./processmaker.json')

const UserListTemplate = {
    getList: function (cb) {
        console.log('get list');
        ProcessMaker.connect(config, function(res) {
            console.log('test call');
            ProcessMaker.getUserList(function(res) {
                console.log(res);
                var elem = [],
                    user,
                    i,

                    users = res.data;

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

                    result = {
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
                    cb(result)
            })
        })
    }
}

module.exports = UserListTemplate