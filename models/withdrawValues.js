import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var withdrawValueSchema = new Schema({
  currency: String,
  value: Number,
},{ collection: 'withdrawValues' });

mongoose.models = {};

var WithdrawValues = mongoose.model('WithdrawValues', withdrawValueSchema);

export default WithdrawValues;