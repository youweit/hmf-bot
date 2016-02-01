var Slack = require('node-slack')
var Trello = require('node-trello')
var config = require('config')

var t = new Trello(config.trello.key, config.trello.token)
var slack = new Slack(config.slack.webhookUrl, {})

var express = require('express')
var app = express()

app.post('/', function (req, res) {
  var date = new Date()
  date.setDate(date.getDate() - 1) // get last 24 hours cards
  // closed means archived
  t.get('/1/lists/' + config.trello.listId + '/cards', { filter: 'closed', since: date }, function (err, data) {
    if (err) throw err
    var counter = 0
    for (var card of data) {
      for (var label of card.labels) {
        if (label.name === config.trello.labelName) {
          counter++
        }
      }
    }
    var message = ''
    if (counter === 0) {
      message = 'WOW NO BUG IGNORED TODAY!!!'
    } else if (counter < 10) {
      message = counter + ' bugs ignored today.'
    } else {
      message = counter + ' BUGS IGNORED TODAY, KAABAAM!!! Why so many?'
    }

    console.log(message)
    var reply = {
      text: message
    }
    res.json(reply)
  })
})

app.listen(config.PORT, function () {
  console.log('app listening on port', config.PORT)
})
