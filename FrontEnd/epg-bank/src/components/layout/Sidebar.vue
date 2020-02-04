<template>
  <div id="sidebar-app">

    <div class="sidebar shadow-sm" >
      <ul class="sidenav">
        <router-link to="/"><li><i class="fas fa-home"></i> INÍCIO </li></router-link>
        <router-link to="/admin/funcionarios"><li><i class="far fa-building"></i> GERIR FUNCIONARIOS </li></router-link>
        <router-link to="/admin/clientes"><li><i class="fas fa-user-friends"></i> GERIR CLIENTES </li></router-link>
        <router-link to="/admin/contas"><li><i class="fas fa-money-check-alt"></i> GERIR CONTAS </li></router-link>
        <router-link to="/admin/transacoes"><li><i class="fas fa-history"></i> GERIR TRANSAÇÕES </li></router-link>
        <router-link to="/admin/configs"><li><i class="fas fa-key"></i> CONFIGURAÇÕES </li></router-link>
        <router-link to="/admin/outros"><li><i class="fas fa-dot-circle"></i> OUTROS </li></router-link>
      </ul>

      <p id="copyright"> &copy; Copyright 2020 - EPG Bank <br> By EdsonPaulo </p>
    </div>

    <header id="head-bar" class="d-flex justify-content-between shadow-sm">
      <a id="logo"> <img src="../../assets/logo.png" width="20" height="20"> EPG BANK</a>

      <span class="d-inline"><i class="fa fa-calendar"></i> 14 de Janeiro de 2020 - 23:01:31 <i class="fa fa-clock-o"></i></span>

      <div class="dropdown d-inline" style="cursor: pointer; ">
        <span class=" dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
          <i class="fa fa-user"></i> Edson Paulo A. Gregório
        </span>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="font-size: 10pt; background: var(--primary-dark);">
          <a class="dropdown-item" href="#"><i class="fa fa-edit"></i> Editar perfil</a>
          <a class="dropdown-item" href="#"><i class="fa fa-close"></i> Terminar sessão</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'sidebar-app',
    data(){
      return {
        user: 'Edson Paulo'
       }
    },
    created: () => {

    }
  }
</script>

<style>
  #head-bar, .sidebar {
    top: 0;
    z-index: 1;
    color: white;
    position: fixed;
    background: var(--primary-dark);
  }

  #head-bar {
    font-size: 10pt;
    margin-left: 0px;
    width: 100%;
    padding: 10px 20px;
    padding-top: 15px;
  }

  .sidebar {
    height: 100vh;
    width: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 52px;
    padding: 40px 0;
  }

  #logo {
    font-family: 'Adventure';
    font-size: 13pt;
    text-align: center;
    display: block;
    margin-left: 20px;
  }

  ul { padding: 0; }

  ul li {
    color: white;
    padding: 14px 16px;
    font-size: 9pt;
    display: block;
    text-align: left;
  }
  ul li:hover { background: var(--accent); cursor: pointer; }

  ul li i { font-size: 10pt; font-weight: 100; margin-right: 10px; }

  #copyright { margin-top: 70%; text-align: center; font-size: 8pt; bottom: 0; }
</style>
