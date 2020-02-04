import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClientModel } from './client.model';

@Injectable({ providedIn: 'root' })
export class ClientsService {

  private readonly API = 'http://localhost:3000/clients';

  constructor( private http: HttpClient ) { }

  getAllClients(): Observable<any> {
    return this.http.get( this.API ).pipe( tap(console.log));
  }

  createClient(client: ClientModel): Observable<any> {
    return this.http.post( this.API, client ).pipe( tap(console.log));
  }
}
