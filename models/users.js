import mongoose from 'mongoose';
import {onUserCreate} from "../lib/onDocCreateHooks"

var Schema = mongoose.Schema;

var userSchema = new Schema({
        username: String,
        utm_campaign: String,
        group: String,
        active: {type:Boolean,default:false},
        email: String,
      },{ collection: 'users' });

mongoose.models = {};

userSchema.post('save', function(doc) {
        onUserCreate(doc)
      });
var Users = mongoose.model('Users', userSchema);

export default Users;