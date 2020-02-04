'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    name: { type: String, required: true, trim: true },

    bi: { type: String, required: true, trim: true, unique: true },

    birthday: { type: Date, required: true}, //data de nascimento
    
    position: { type: String, required: true }, //cargo
    
    salary: { type: Number, required: true }, //salario
    
    contact: { //contact
        phone: { type: Number, required: true },
        email: { type: String }
    },
    address: {  //endereco
        city: { type: String, required: true },
        street:    { type: String }
    }
});
module.exports = mongoose.model('Employee', Employee);