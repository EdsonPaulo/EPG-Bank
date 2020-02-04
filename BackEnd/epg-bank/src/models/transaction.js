'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transaction = new Schema({
    operation: {
        type: String, 
        required: true,
        enum: [ 'sack', 'deposit' ],
    },

    amount: { type: Number, required: true },

    date: { type: Date, required: true, default: Date.now},
    
    account: {  //proprietario
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true 
    }
});
module.exports = mongoose.model('Transaction', Transaction);