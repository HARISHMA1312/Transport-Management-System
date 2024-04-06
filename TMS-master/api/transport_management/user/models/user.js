// user.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlRegularExp =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const userSchema = new Schema({
  // Registration details
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },

  // Default user details
  userName: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  busNumber: { type: Number, required: false },
  pickupAddress: { type: String, required: true },
  url: {
    type: String,
    required: false,
    validate: {
      validator: function (v) {
        return urlRegularExp.test(v);
      },
      message: (props) => `${props.value} is not a valid url!`
    }
  },
  regNumber: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
