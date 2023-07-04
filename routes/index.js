const express = require('express');
const router = express.Router();
const messageModel = require('../models/message');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await messageModel.find({}).catch(err => console.log(err));

  res.render('index', { title: 'Mini messageboard', messages: messages });
});

/* GET form page. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST form info. */
router.post('/new', async function(req, res, next) {
  const {user, text} = req.body;
  const newMessage = { user, text };
  const dbMessage = new messageModel(newMessage);
  await dbMessage.save().catch(err => console.log(err))
  res.redirect('/');
});

module.exports = router;
