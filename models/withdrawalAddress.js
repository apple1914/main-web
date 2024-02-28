import mongoose from 'mongoose';
import {onWithdrawalAddressCreate} from "../lib/onDocCreateHooks"

var Schema = mongoose.Schema;

var withdrawalAddressSchema = new Schema({
  username: String,
  address: String,
  blockchain: String,
  cryptocurrency: String,
  nickname: String,
},{ collection: 'withdrawalAddress' });

mongoose.models = {};

withdrawalAddressSchema.post('save', function(doc) {
  onWithdrawalAddressCreate(doc)
      });
var WithdrawalAddress = mongoose.model('WithdrawalAddress', withdrawalAddressSchema);

export default WithdrawalAddress;