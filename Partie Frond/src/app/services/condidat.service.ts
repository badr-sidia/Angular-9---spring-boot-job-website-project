import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import {Condidat} from '../models/condidat';


@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  constructor(private http:HttpClient) { }
  connexion(data){
    return this.http.post('http://localhost:9001/condidat/connexion',data);
  }
  getbyfilter(condidat):Observable<Condidat[]>{
    console.log(condidat.formation)
    console.log(condidat.nom)
    
    return this.http.get<Condidat[]>(environment.BaseUrl+'/condidat/allfilter/'+condidat.nom+'/'+condidat.formation);
  }
  getbyido(id):Observable<Condidat>{
    return this.http.get<Condidat>(environment.BaseUrl+'/condidat/getprofil/'+id);
  }
}
