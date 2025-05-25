import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ClientResponse } from '../../models/responses/Clients/client-response';
import { ClientRequest } from '../../models/requests/Clients/client-request';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/clients/createdBy`);
  }

  getClientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/clients/${id}`);
  }

  createClient(client: ClientRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/clients`, client);
  }

  updateClient(id: string, client: ClientRequest): Observable<ClientResponse> {
    return this.http.put<ClientResponse>(
      `${this.apiUrl}/api/clients/${id}`,
      client
    );
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/clients/${id}`);
  }
}
