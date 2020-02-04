<template>
  <div id="customers-app">
    <h5 style="text-align: left"> <i class="fas fa-user-friends"></i>  GERIR CLIENTES  </h5>
    <hr>

    <div class="container mt-5">
      <div class="input-group">
        <div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-search mr-1"></i></div></div>
        <input type="text" id="searchBar" v-on:keyup="filterByName()" class="form-control" placeholder="Pesquisar Cliente...">
      </div>
    </div>

    <div class="container mt-5">
      <div class="d-flex justify-content-between ">
        <h6>Lista de Clientes Cadastrados</h6>

          <button type="button" class="btn btn-sm" id="newClient"
                  style="background: var(--primary-dark); color: white">
              <i class="fa fa-plus mr-1"></i> Adicionar Novo Cliente
        </button>
      </div>
      <hr>
      <div class="table-responsive p-3">
        <table class="table table-sm table-hover w-100 shadow" id="customersTable">
          <thead style="background: #3f51b5; color: white">
            <tr>
              <th scope="col">#</th>
              <th scope="col"><i class="far fa-user mr-1"></i> Nome</th>
              <th scope="col"><i class="far fa-id-card mr-1"></i> BI</th>
              <th scope="col"><i class="fas fa-phone-alt mr-1"></i> Telefone</th>
              <th scope="col"> @  Email</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="customers == null || customers.length == 0" class="text-center font-weight-bold">
              <td colspan="5">  Sem clientes cadastrados! </td>
            </tr>

            <tr v-for="client in customers" :key="client._id">
              <th scope="row">{{ client._id }}</th>
              <td> {{ client.name }} </td>
              <td> {{ client.bi }} </td>
              <td> {{ client.contact.phone }} </td>
              <td> {{ client.contact.email }} </td>
              <td>
                <button type="button" class="btn btn-sm btn-info mr-2" @click="onclick( client._id )" data-toggle="tooltip" title="Ver Mais"> <i class="fas fa-eye"></i> Ver</button>
                <button type="button" class="btn btn-sm btn-warning mr-2" data-toggle="tooltip" title="Modificar"> <i class="fas fa-edit"></i> Modificar</button>
                <button type="button" class="btn btn-sm btn-danger" data-toggle="tooltip" title="Eliminar"> <i class="fas fa-trash-alt"></i> Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Novo Cliente</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ssdsd
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AddCustomer from './AddCustomer'

export default {
  name: 'customers-app',
  components: { AddCustomer },
  data: () => {
    return {
      msg: 'Welcome to Your Vue.js App',
      customers: [
        {
          _id: 1,
          name: 'Edson Paulo',
          bi: '2EASDASD',
          contact: {
            phone: '942582193',
            email: 'edsonpaulo24@gmail.com'
          }
        },
         {
          _id: 2,
          name: 'Paloma Paulo',
          bi: 'ALDASDON',
          contact: {
            phone: '942582193',
            email: 'edsonpaulo24@gmail.com'
          }
        },
         {
          _id: 3,
          name: 'Gregório Paulo',
          bi: 'hyhhj',
          contact: {
            phone: '942582193',
            email: 'edsonpaulo24@gmail.com'
          }
        }
      ]
    }
  },
  methods: {
    filterByName() { //
      var value = $("#searchBar").val().toLowerCase();
      $("#customersTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    },

    showModal(){
      $('#myModal').modal('show')
      $('#myModal').modal({ show: true })
      $('#myModal').modal('toggle')
    },

    createClient() {},

    onclick( id ) {
      alert(id);
    }
  }
}
</script>

<style>

</style>
