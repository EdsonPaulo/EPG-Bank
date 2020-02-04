'use strict'
/* Tratamento dos requests ()*/
const mongoose = require('mongoose');
const Account = mongoose.model('Account');

//listar todas as contas da BD
exports.get = (req, res, next) => {
    Account
        .find({})
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a conta do pelo id
exports.getById = (req, res, next) => {
    Account
        .findById( req.params.id )
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a conta do numero indicado
exports.getByNumber = (req, res, next) => {
    Account
        .findOne({ number: req.params.number  })
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};


exports.post = (req, res, next) => {
    var newAccount = new Account(req.body); 
    console.log(newAccount);
    newAccount
        .save() //salvar no bd
        .then(() => { 
            res.status(201).send({ 
                message: 'Conta cadastrada com sucesso!' 
            });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({
                message: 'ERRO: Falha ao cadastrar conta',
                data: error
            });
        })
};

//actualizar a conta
exports.put = (req, res, next) => {
    console.log('antes de actualizar: '+ Account);
    Account
        .findByIdAndUpdate( req.params.id, {
            $set: { // actualizar a conta no bd
                balance: req.body.balance,
                active: req.body.active,
                accountType: req.body.accountType,
                transactions: req.body.transactions,
            }
        }) 
        .then(() => { 
            res.status(200).send({ message: 'Conta atualizada com sucesso!' });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({ message: 'ERRO: Falha ao atualizar conta', data: error });
        })
    console.log('depois de actualizar: '+ Account);
};

//remover a conta
exports.delete = (req, res, next) => {
    Account
    .findByIdAndRemove( req.params.id ) // actualizar a conta no bd
    .then(() => { 
        res.status(200).send({ message: 'Conta removida com sucesso!' });   //sucesso 
    })
    .catch(error => { //erro
        res.status(400).send({ message: 'ERRO: Falha ao remover conta', data: error });
    })
}