import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  url: string = 'http://viacep.com.br/ws'
  
  constructor(private http: HttpClient) { }

  getCep(cep){
    return this.http.get(`${this.url}/${cep}/json`)
  }
}
