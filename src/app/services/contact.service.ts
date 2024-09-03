import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string ='http://18.231.193.172:8081/enviar'
  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any>{
    return this.http.post<any>(`${this.url}`, message);
  }

}
