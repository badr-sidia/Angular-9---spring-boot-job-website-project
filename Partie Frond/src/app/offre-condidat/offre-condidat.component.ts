import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-offre-condidat',
  templateUrl: './offre-condidat.component.html',
  styleUrls: ['./offre-condidat.component.css']
})

export class OffreCondidatComponent implements OnInit {
files
condidats:Cv[]
cv
images:any[]
images1:any[]
all:Data[]
selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  retrievedImage1: any;
  base64Data1: any;
  retrieveResonse1: any;
  message: string;
  imageName: any;
  constructor(private cvservice:CvService,
    private route:ActivatedRoute,private imageservice:ImageService) {
      
     }

  ngOnInit(): void {
    this.imageservice.getFiles().subscribe(
      files=>{
        this.files=files
        console.log(this.files)
        /*this.files.forEach(function(value){
             console.log(value)
        })*/
        }
      
    )
    var cv1=[]
    var cv2=[]
    var imageArray=[]
    var cvArray=[]
    var cvall=[]
    this.cvservice.geAllCvbyOffre(this.route.params['value']['id']).subscribe(
      condidats=>{
        this.condidats=condidats;
        console.log(this.condidats)

        for (let i = 0; i < this.condidats.length; i++) {
          const data=new Data();
          console.log(condidats[i])
          data.cvfile='http://localhost:9001/upload/files/' +condidats[i].cvfile;
          data.image='http://localhost:9001/upload/files/' +condidats[i].image;
          data.phone=condidats[i].phone;
          data.availablestart=condidats[i].availablestart;
          console.log(data)
          imageArray.push('http://localhost:9001/upload/files/' + condidats[i].image)
          cvArray.push('http://localhost:9001/upload/files/' + condidats[i].cvfile)
          cvall.push(data)
          this.imageservice.getFileByid(condidats[i].cvfile).subscribe(
            file=>{
              
              //console.log(file)
            cv1.push(file)
               }
          )
         /*this.imageservice.getImage(condidats[i].cvfile).subscribe(
            file=>{
              this.retrieveResonse = file;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              console.log(this.retrievedImage)
            cv1.push(this.retrievedImage)
            }
          )*/
         /* this.imageservice.getImage(condidats[i].image).subscribe(
            file=>{
              this.retrieveResonse1 = file;
          this.base64Data1 = this.retrieveResonse1.picByte;
          this.retrievedImage1 = 'data:image/pdf;base64,' + this.base64Data1;
              console.log(this.retrievedImage1)
            cv2.push(this.retrievedImage1)
            }
          )*/
        }
        
        console.log(cvall)
        this.images=imageArray
        this.images1=cvArray
        this.all=cvall
      }
    )
    
  }
  /*getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:9001/upload/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }*/

}
class Data{
  image:string;
  cvfile:string;
  phone:string;
  availablestart:string
}