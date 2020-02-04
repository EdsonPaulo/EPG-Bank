<template>
<!--
      <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="name">Nome</label>
                <input type="text" class="form-control form-control-sm" name="name" placeholder="Nome Completo" [(ngModel)]="client.name" required #name>
                </div>
                <div class="form-group col-md-6">
                <label for="bi">Bilhete de Identidade</label>
                <input type="text" class="form-control form-control-sm" name="bi" placeholder="Número do BI" [(ngModel)]="client.bi" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="phone">Telefone</label>
                <input type="text" class="form-control form-control-sm" name="phone" placeholder="Ex.: 992 421 254" [(ngModel)]="client.a1" required>
                </div>
                <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input type="email" class="form-control form-control-sm" name="email" placeholder="usuario@email.com"  [(ngModel)]="client.email">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="birthday">Data de Nascimento</label>
                <input type="date" class="form-control form-control-sm" name="birthday" [(ngModel)]="client.birthday" required>
                </div>

                <div class="form-group col-md-6">
                <label for="nacionality">Nacionalidade</label>
                <select name="nacionality" class="form-control form-control-sm" [(ngModel)]="client.nacionality">
                    <option selected>Angolana</option>
                    <option>Portuguesa</option>
                    <option>Brasileira</option>
                    <option>Moçambicana</option>
                </select>
                </div>
            </div>
            </form>
            -->
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</template>

<script>
export default {

}
</script>

<style>

</style>
