exports.listTpl = {
    "attachment":{
        "type":"template",
        "payload":{
            "template_type":"generic",
            "elements":[
                {
                    "title":"Welcome to ProcessMaker BPM & Workflow Software",
                    "item_url":"https://processmaker.com",
                    "image_url":"https://www.processmaker.com/sites/all/themes/pmthemev2/img/white-badge.png",
                    "subtitle":"We are proud to be one of the fastest growing companies in America!",
                    "buttons":[
                        {
                            "type":"web_url",
                            "url":"https://processmaker.com",
                            "title":"View Website"
                        },
                        {
                            "type":"postback",
                            "title":"Start Chatting",
                            "payload":"DEVELOPER_DEFINED_PAYLOAD"
                        }
                    ]
                }
            ]
        }
    }
};