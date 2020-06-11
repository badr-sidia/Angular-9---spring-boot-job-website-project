import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  connexion(data){
    return this.http.post('http://localhost:9001/admin/sendmail',data);
  }
}
