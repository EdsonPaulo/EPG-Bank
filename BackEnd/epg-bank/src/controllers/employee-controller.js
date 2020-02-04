'use strict'
/* Tratamento dos requests ()*/
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

//listar todas as employeees da BD
exports.get = (req, res, next) => {
    Employee
        .find({})
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a employeee do pelo id
exports.getById = (req, res, next) => {
    Employee
        .findById( req.params.employee )
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};

//listar a employeee do numero indicado
exports.getByBi = (req, res, next) => {
    Employee
        .findOne({ bi: req.params.bi })
        .then( data => {  res.status(200).send(data) })
        .catch( error => { res.status(400).send(error) })
};



exports.post = (req, res, next) => {
    var noewEmployee = new Employee(req.body); 
    console.log(noewEmployee);
    noewEmployee
        .save() //salvar no bd
        .then(() => { 
            res.status(201).send({ 
                message: 'Funcionario cadastrado com sucesso!' 
            });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({
                message: 'ERRO: Falha ao cadastrar funcionario',
                data: error
            });
        })
};

//actualizar a employeee
exports.put = (req, res, next) => {
    console.log('antes de actualizar: '+ Employee);
    Employee
        .findByIdAndUpdate( req.params.id, {
            $set: { // actualizar a employeee no bd
                name: req.body.name,
                bi: req.body.bi,
                birthday: req.body.birthday,
                contact: req.body.contact
            }
        }) 
        .then(() => { 
            res.status(200).send({ message: 'Funcionario atualizado com sucesso!' });   //sucesso 
        })
        .catch(error => { //erro
            res.status(400).send({ message: 'ERRO: Falha ao atualizar Funcionario', data: error });
        })
    console.log('depois de actualizar: '+ Employee);
};

//remover a employeee
exports.delete = (req, res, next) => {
    Employee
    .findByIdAndRemove( req.params.id ) // actualizar a employeee no bd
    .then(() => { 
        res.status(200).send({ message: 'Funcionario removido com sucesso!' });   //sucesso 
    })
    .catch(error => { //erro
        res.status(400).send({ message: 'ERRO: Falha ao remover Funcionario', data: error });
    })
}