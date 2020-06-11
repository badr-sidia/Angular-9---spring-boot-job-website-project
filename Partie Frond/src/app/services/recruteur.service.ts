import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Recruteur} from '../models/recruteur'
import {Observable}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  constructor(private http:HttpClient) { }
  connexion(data){
    return this.http.post('http://localhost:9001/recruteur/connexion',data);
  }
  getRecbyid(id):Observable<Recruteur>{
          return this.http.get<Recruteur>('http://localhost:9001/recruteur/getprofil/'+id);
  }
}
