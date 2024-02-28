import mongoose from 'mongoose';
import {onDepositCreate} from "../lib/onDocCreateHooks"

var Schema = mongoose.Schema;

var depositSchema = new Schema({
  username: String,
  fiatAmount: Number,
  fiatCurrency: String,
  usdtAmount: Number,
  blockchain: String,
  cryptocurrency: String,
  address: String,
  completed: { type: Boolean, default: false },
  withdrawal: { triggerWithdrawal: Boolean, withdrawalAddressId: String },
}, { collection: 'deposits' }
);

mongoose.models = {};

depositSchema.post('save', function(doc) {
        onDepositCreate(doc)
      });
var Deposits = mongoose.model('Deposits', depositSchema);

export default Deposits;