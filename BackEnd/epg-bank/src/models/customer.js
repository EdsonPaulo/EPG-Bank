'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    name: { type: String, required: true, trim: true },

    bi: { type: String, required: true, trim: true, unique: true },

    phone: { type: String },

    email:    { type: String },
    
    birthday: { type: Date, required: true},

    nacionality: { type: String, default: 'angolana' }
   
});

module.exports = mongoose.model('Customer', Customer);