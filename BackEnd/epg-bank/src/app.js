'use strict'
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();
const router = express.Router(); 

//configurando o mongoose (conexão com MongoDB) 
mongoose.Promise = global.Promise;
mongoose.connect( config.connectionString )
        .then(() => { console.log('BD sucessfull conected!'); })
        .catch((e) => { console.log('ERROR: BD connection error: ' + e)});

//carregamento dos models
const Employee = require('./models/employee');
const Customer = require('./models/customer');
const Account = require('./models/account');
const Transaction = require('./models/transaction');

//carregamento das rotas
const indexRoute = require('./routes/index-route');
const employeeRoute = require('./routes/employee-route');
const customerRoute = require('./routes/customer-route');
const accountRoute = require('./routes/account-route');
const transactionRoute = require('./routes/transaction-route');

//app.engine('html', require('ejs').renderFile); //disponibilizando recursos ejs em html files
app.use(express.static('./src/public')); //tornar os assets e outros públicos
app.use(bodyParser.urlencoded({extended: true})); //codificação de urls
app.use(bodyParser.json()); //converter corpo das requisições em JSON

app.use(cors());  

//redirecionamento de rotas 
app.use('/', indexRoute);
app.use('/employees', employeeRoute);
app.use('/customers', customerRoute);
app.use('/accounts', accountRoute);
app.use('/transactions', transactionRoute);

module.exports = app;