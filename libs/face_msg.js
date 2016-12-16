'use strict';
const fetch = require('node-fetch');
const crypto = require('crypto');
const config = require('./assets/config');
const listTpl = require('./assets/listTpl');
const processTpl = require('./assets/processTpl');

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
if (!FB_PAGE_TOKEN) { throw new Error('missing FB_PAGE_TOKEN') }

const FB_APP_SECRET = process.env.FB_APP_SECRET;
if (!FB_APP_SECRET) { throw new Error('missing FB_APP_SECRET') }

const customTpl=[] ;

customTpl['listTpl'] = listTpl.getList;
customTpl['processTpl'] = processTpl.getList;
console.log(customTpl['processTpl']);

var fbMessage = function(id, text, isTpl, tplObj){
    let getList
    if (isTpl) {
        console.log('tpl');
        console.log(tplObj.file);
        console.log(customTpl);
        console.log(customTpl[tplObj.file])
        getList = customTpl[tplObj.file]
        getList(function(res) {
            console.log('hi');

            console.log(res);
            console.log(tplObj);
            const body = JSON.stringify({
                recipient: { id },
                message: res,
            });
            const qs = 'access_token=' + encodeURIComponent(FB_PAGE_TOKEN);
                return fetch('https://graph.facebook.com/me/messages?' + qs, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body,
                })
                    .then(rsp => rsp.json())
                    .then(json => {
                            if (json.error && json.error.message) {
                            throw new Error(json.error.message);
                        }
                        return json;
                    });
            })
    }  else  {
    console.log('por falso');
    console.log(text);
        const body = JSON.stringify({
            recipient: { id },
            message: {text},
        });
    console.log(body);
        const qs = 'access_token=' + encodeURIComponent(FB_PAGE_TOKEN);
        return fetch('https://graph.facebook.com/me/messages?' + qs, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body,
        })
        .then(rsp => rsp.json())
        .then(json => {
                if (json.error && json.error.message) {
                throw new Error(json.error.message);
            }
            return json;
        });
    }


};

// to list processes
var fbList = function(id, text, isTpl){
  console.log('hasta aqui llega');
    const  msg = isTpl ? customProcess: { text };

        const body = JSON.stringify({
            recipient: { id },
            message: msg,
        });

        const qs = 'access_token=' + encodeURIComponent(FB_PAGE_TOKEN);
        return fetch('https://graph.facebook.com/me/messages?' + qs, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body,
            })
                .then(rsp => rsp.json())
    .then(json => {
            if (json.error && json.error.message) {
            throw new Error(json.error.message);
        }
        return json;
    });
    };

/*
 * Verify that the callback came from Facebook. Using the App Secret from
 * the App Dashboard, we can verify the signature that is sent with each
 * callback in the x-hub-signature field, located in the header.
 *
 * https://developers.facebook.com/docs/graph-api/webhooks#setup
 *
 */
var verifyRequestSignature = function (req, res, buf) {
    var signature = req.headers["x-hub-signature"];

    if (!signature) {
        // For testing, let's log an error. In production, you should throw an
        // error.
        console.error("Couldn't validate the signature.");
    } else {
        var elements = signature.split('=');
        var method = elements[0];
        var signatureHash = elements[1];

        var expectedHash = crypto.createHmac('sha1', FB_APP_SECRET)
            .update(buf)
            .digest('hex');

        if (signatureHash != expectedHash) {
            throw new Error("Couldn't validate the request signature.");
        }
    }
}

exports.fbMessage = fbMessage;
exports.fbList = fbList;
exports.verifyRequestSignature = verifyRequestSignature;
