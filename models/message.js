const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true, maxLength: 400 },
  user: { type: String, required: true, maxLength: 100 },
  date: {type: Date, default: Date.now} ,
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);