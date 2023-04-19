const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : {
    type : String,
    required : true
  },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    profilePic : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },

})

const Users = mongoose.model('users', userSchema);
module.exports = Users;