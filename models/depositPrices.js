import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var depositPriceSchema = new Schema({
  currency: String,
  prices:Map,
  fiatAmountMinimum:Number,
  lastUpdateAttempt:Date,
}, { collection: 'depositPrices' });

mongoose.models = {};

// userSchema.post('save', function(doc) {
//         console.log("triggered usersSchema func")
//       });
var DepositPrices = mongoose.model('DepositPrices', depositPriceSchema);

export default DepositPrices;