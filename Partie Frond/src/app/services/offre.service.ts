import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http :HttpClient) { }
  getalloffre(){
    return this.http.get( environment.BaseUrl+'/offre/all');
  }
  getalloffreByRec(id){
    return this.http.get( environment.BaseUrl+'/offre/all/'+id);
  }
  getbyido(id):Observable<Offre>{
    return this.http.get<Offre>(environment.BaseUrl+'/offre/getprofil/'+id);
  }
  getbyfilter(offre):Observable<Offre[]>{
    console.log(offre.localisation)
    console.log(offre.duree)
    
    return this.http.get<Offre[]>(environment.BaseUrl+'/offre/allfilter/'+offre.localisation+'/'+offre.duree+'/'+offre.title);
  }
  ajoutercv(id,data){
    return this.http.post(environment.BaseUrl+'/offre/ajouter/' + id,data);
  }

}
