# hmf-bot




Just a simple slack & trello bot.

```
$ npm install
```

copy the config file and fill in the configs

```
$ cp config/template.json config/default.json
```

```javascript
{
  "trello": {
    "key": "<TRELLO_PUBLIC_KEY>", // https://trello.com/app-key
    "token": "<TOKEN>", // https://trello.com/1/connect?key=<TRELLO_PUBLIC_KEY>&name=MyApp&response_type=token
    "listId": "<LIST ID>",
    "labelName": "<LABEL TO BE COUNT>"
  },
  "slack": {
    "webhookUrl": "<INCOMING_WEBHOOK_URL>"
  },
  "PORT": 3000
}
```

run

```
$ npm start
```

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
