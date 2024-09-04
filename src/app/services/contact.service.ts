import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string ='https://porfoliorodr1alexdev.store/enviar'
  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any>{
    return this.http.post<any>(`${this.url}`, message);
  }

  // sendMessage(message: any): Promise<void> {
  //   return fetch(this.url, {
  //     method: 'POST',
  //     mode: 'no-cors', // Importante: esto es lo que limita el acceso a la respuesta
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(message)
  //   })
  //   .then(() => {
  //     console.log('Message sent with no-cors mode');
  //   })
  //   .catch(error => {
  //     console.error('Error sending message:', error);
  //   });
  // }

}
