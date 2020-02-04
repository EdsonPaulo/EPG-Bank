'use strict'
const mongoose = require('mongoose');
//const autoIncrement = require('mongodb-autoincrement');
const Schema = mongoose.Schema;

/** 
 * npm install -g mongodb-autoincrement --save
 * 
autoIncrement.setDefaults({
    collection: 'accounts',
    field: '_id',
    step: 1
})
*/

//mongoose.plugin(autoIncrement.mongoosePlugin, {field: _id, step: 1});

const Account = new Schema({
    number:  { type: Number, required: true, unique: true, trim: true}, //numero de conta
   
    balance: { type: Number, default: 0 }, //saldo

    active:  { type: Boolean, default: true }, //estado activo

    createDate: { type: Date, default: Date.now }, //data de abretura

    accountType: { //tipo de conta
        type: String,
        required: true,
        enum: [ 'current', 'salary' ],
        default: 'current'
    },
    customer: {  //proprietario
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true 
    },
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }] //histórico de transacoes
});
module.exports = mongoose.model('Account', Account);