import Vue from 'vue'
import Router from 'vue-router'

import '../assets/styles.css'

import '../assets/jquery/jquery-3.4.1.min'
import '../assets/bootstrap/js/popper.min'
import '../assets/bootstrap/js/bootstrap'
//import '../assets/fontawesome5/js/all.min.js'

import Main from '@/components/content/main'
import Login from '@/components/content/login'
import Home from '@/components/content/admin/home'

import Customers from '@/components/content/admin/customers/customers'
import AddCustomers from '@/components/content/admin/customers/addcustomer'
import Customer from '@/components/content/admin/customers/customer'

import Configs from '@/components/content/admin/configs'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/admin/home', name: 'Home', component: Home },

    { path: '/admin/clientes', name: 'Customers', component: Customers },
    { path: '/admin/clientes/add', name: 'AddCustomers', component: AddCustomers },
    { path: '/admin/clientes/:_id', name: 'Customer', component: Customer },

    /**
    { path: '/admin/configs', name: 'Configs', component: Configs },
    { path: '/admin/contas', name: 'Accounts', component: Accounts },
    { path: '/admin/funcionarios', name: 'Employees', component: Employees },
    { path: '/admin/transacoes', name: 'Transactions', component: Transactions }

    */
  ]
})
