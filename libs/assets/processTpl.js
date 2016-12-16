const processList = require('./processList').processList;
const processStart = require('./processList').processCanStart;
const _ = require('lodash');

var elem = [],
    elem2 = [],
    process,
    canStart,
    i, j,
    startProcesses = processStart;
    processes = _.get(processList, 'data');
for (i = 0; i < processes.length; i += 1){
    process = processes[i];
    elem.push({
          "title": process.attributes.name,
          "subtitle": process.attributes.status,
          "image_url": "https://pbs.twimg.com/profile_images/621332085136064514/vs-n_aGQ.jpg",
          "buttons": [{
              "type": "postback",
              "title": "Start Process",
              "payload": "Payload for start the process"
          }, {
              "type": "postback",
              "title": "View details",
              "payload": "hello Processmaker",
          }],
    });
}

for (j = 0; j < startProcesses.length; j += 1) {
  canStart = startProcesses[j];
  elem2.push({
      "title": canStart.process.name,
      "subtitle": canStart.task.name,
      "image_url": "https://pbs.twimg.com/profile_images/621332085136064514/vs-n_aGQ.jpg",
      "buttons": [{
          "type": "postback",
          "title": "Start Process",
          "payload": "Payload for start the process"
      }, {
          "type": "postback",
          "title": "View details",
          "payload": canStart.id,
      }],
  });
}

exports.processTpl = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "generic",
            "elements": elem
        }
    }
};

exports.canStartTpl = {
  "attachment": {
      "type": "template",
      "payload": {
          "template_type": "generic",
          "elements": elem2
      }
  }
};
