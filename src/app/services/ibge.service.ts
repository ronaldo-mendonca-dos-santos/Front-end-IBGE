import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private estadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any> {
    return this.http.get(this.estadosUrl);
  }

  getMunicipios(ufId: number): Observable<any> {
    return this.http.get(`${this.estadosUrl}/${ufId}/municipios`);
  }

  getMetadados(ufId: number): Observable<any> {
    return this.http.get(`https://servicodados.ibge.gov.br/api/v4/malhas/estados/${ufId}/metadados`);
  }
  
  

}
