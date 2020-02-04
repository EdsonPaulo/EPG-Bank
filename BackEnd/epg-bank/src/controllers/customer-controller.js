'use strict'
/* Tratamento dos requests ()*/
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

//listar todas as customeres da BD
exports.get = (req, res, next) => {
    Customer
        .find({})
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a customere do pelo id
exports.getById = (req, res, next) => {
    Customer
        .findById( req.params.customer )
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a customere do numero indicado
exports.getByBi = (req, res, next) => {
    Customer
        .findOne({ bi: req.params.bi })
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};



exports.post = (req, res, next) => {
    var newCustomer = new Customer(req.body); 
    console.log(req.body);
    console.log(newCustomer);
    newCustomer
        .save() //salvar no bd
        .then(() => { 
            res.status(201).send({ 
                message: 'Customere cadastrado com sucesso!' 
            });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({
                message: 'ERRO: Falha ao cadastrar customere',
                data: error
            });
        })
};

//actualizar a customere
exports.put = (req, res, next) => {
    console.log('antes de actualizar: '+ Customer);
    Customer
        .findByIdAndUpdate( req.params.id, {
            $set: { // actualizar a customere no bd
                name: req.body.name,
                bi: req.body.bi,
                birthday: req.body.birthday,
                contact: req.body.contact
            }
        }) 
        .then(() => { 
            res.status(200).send({ message: 'Customere atualizado com sucesso!' });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({ message: 'ERRO: Falha ao atualizar customere', data: error });
        })
    console.log('depois de actualizar: '+ Customer);
};

//remover a customere
exports.delete = (req, res, next) => {
    Customer
    .findByIdAndRemove( req.params.id ) // actualizar a customere no bd
    .then(() => { 
        res.status(200).send({ message: 'Customere removido com sucesso!' });   //sucesso 
    })
    .catch(error => { //erro
        res.status(400).send({ message: 'ERRO: Falha ao remover customere', data: error });
    })
}