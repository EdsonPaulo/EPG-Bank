import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClientsService } from './clients.service';
import { ClientModel } from './client.model';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: ClientModel = new ClientModel();
  clients: Array<any> = new Array();

  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('bi') biInput: ElementRef;
  @ViewChild('phone') phoneInput: ElementRef;
  @ViewChild('email') emailInput: ElementRef;
  @ViewChild('nacionality') nacionalityInput: ElementRef;
  @ViewChild('birthday') birthdayInput: ElementRef;

  constructor( private clientsService: ClientsService ) { }

  onclick(id) {
    alert(id);
    console.log(id);
  }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientsService.getAllClients().subscribe(
      clients => { this.clients = clients; },
      err => { console.log('Erro ao listar clientes ', err)
    });
  }

  createClient() {
    console.log('Nome na caixa: ' + this.nameInput.nativeElement.value );
    console.log( this.client );
    this.clientsService.createClient( this.client ).subscribe(
      client => {
        this.client = new ClientModel();
        this.getAllClients();
      },
      err => { console.log('Erro ao salvar cliente', err);
    });
  }

  onKeyUp() {
    // declaracao das variaveis
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    table = document.getElementById('clientsTable');
    tr = table.getElementsByTagName('tr');

    // percorre todas as linhas da tabela, e oculta as que nao tiverem a palavra a pesqisar no peimeiro td
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }


}
