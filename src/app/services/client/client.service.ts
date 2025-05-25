import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalResponse } from '../../models/responses/Auth/GlobalResponse';
import { ClientResponse } from '../../models/responses/client/client-response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = `${environment.apiUrl}/api/clients`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<GlobalResponse<ClientResponse[]>> {
    return this.http.get<GlobalResponse<ClientResponse[]>>(this.apiUrl);
  }

  findByTrackingId(trackingId: string): Observable<GlobalResponse<ClientResponse>> {
    return this.http.get<GlobalResponse<ClientResponse>>(`${this.apiUrl}/${trackingId}`);
  }
}
