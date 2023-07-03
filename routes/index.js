const express = require('express');
const router = express.Router();

const messages = [{
  text: 'A lil message from me',
  user: 'Peaches',
  date: new Date(),
  },
  {
    text: 'Just a word or two',
    user: 'Cyril',
    date: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini messageboard', messages: messages });
});

/* GET form page. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST form info. */
router.post('/new', function(req, res, next) {
  let newMessage={};
  newMessage.user = req.body.name;
  newMessage.text = req.body.message;
  newMessage.date = new Date();
  messages.push(newMessage);

  res.redirect('/');
});

module.exports = router;
