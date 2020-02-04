'use strict'
/* Tratamento dos requests ()*/
const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');

//listar todas as transaçãos da BD
exports.get = (req, res, next) => {
    Transaction
        .find({})
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a transação do pelo id
exports.getById = (req, res, next) => {
    Transaction
        .findById( req.params.id )
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};


exports.post = (req, res, next) => {
    var newTransaction = new Transaction(req.body); 
    console.log(newTransaction);
    newTransaction
        .save() //salvar no bd
        .then(() => { 
            res.status(201).send({ 
                message: 'Transação cadastrada com sucesso!' 
            });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({
                message: 'ERRO: Falha ao cadastrar transação',
                data: error
            });
        })
};

//actualizar a transação
exports.put = (req, res, next) => {
    console.log('antes de actualizar: '+ Transaction);
    Transaction
        .findByIdAndUpdate( req.params.id, {
            $set: { // actualizar a transação no bd
                operation: req.body.operation,
                value: req.body.value,
                date: req.body.date,
                account: req.body.account,
            }
        }) 
        .then(() => { 
            res.status(200).send({ message: 'Transação atualizada com sucesso!' });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({ message: 'ERRO: Falha ao atualizar transação', data: error });
        })
    console.log('depois de actualizar: '+ Transaction);
};

//remover a transação
exports.delete = (req, res, next) => {
    Transaction
        .findByIdAndRemove( req.params.id ) // actualizar a transação no bd
        .then(() => { 
            res.status(200).send({ message: 'Transação removida com sucesso!' });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({ message: 'ERRO: Falha ao remover transação', data: error });
        })
}