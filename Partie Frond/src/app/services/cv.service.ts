import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
import { Cv } from '../models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
cv=new Cv();
  constructor(private http: HttpClient) { }
  ajoutercv(id,ido,data){
    return this.http.post(environment.BaseUrl+'/cv/ajouter/' + id+'/'+ido,data);
  }
  geAllCvbyOffre(id):Observable<Cv[]>{
    return this.http.get<Cv[]>(environment.BaseUrl+'/cv/all/'+id);
  }
}
