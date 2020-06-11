import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:9001/upload/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:9001/upload/getallfiles');
  }
  getFileByid(name:string): Observable<any> {
    return this.http.get('http://localhost:9001/upload/files/'+name,{responseType: 'text'});
  }
  setHttpHeader(){
const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');

return headers
  }
  getImage(imageName) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    return this.http.get('http://localhost:9001/upload/get/' +imageName)
     
  }
}
