import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { ConfigsComponent } from './admin/configs/configs.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { EmployeesComponent } from './admin/employees/employees.component';

import { ClientsService } from './admin/clients/clients.service';
import { AccountsService } from './admin/accounts/accounts.service';
import { TransactionsService } from './admin/transactions/transactions.service';
import { EmployeesService } from './admin/employees/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ClientsComponent,
    AccountsComponent,
    ConfigsComponent,
    TransactionsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, ClientsService, AccountsService, TransactionsService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
