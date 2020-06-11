import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Cv } from '../models/cv';
import { Condidat } from '../models/condidat';
import { ImageService } from '../services/image.service';
import {OffreService} from '../services/offre.service';
import { HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curuculum',
  templateUrl: './curuculum.component.html',
  styleUrls: ['./curuculum.component.css']
})
export class CuruculumComponent implements OnInit {
filesToUpload: Array<File>;
filesToUpload1: Array<File>;
position;
cvfile;
image;
cv=new Cv();
idcondidat;
condidat=new Condidat();
  constructor(private sercv :CvService,private servcimage:ImageService,
    private route:ActivatedRoute,
    private offreservice:OffreService) {
    this.cvfile="choisir une image";
    this.image="choisir image profil"
   }

  ngOnInit() {
    console.log(this.route.params['value']['id'])
    this.offreservice.getbyido(this.route.params['value']['id']).subscribe(
      offre=>{
        this.position=offre.title;
      }
    )
  }
  recuperFile(file){
    this.filesToUpload = <Array<File>>file.target.files;

    this.cvfile = file.target.files[0]['name'];
    
  }
  recuperFile1(file){
    this.filesToUpload1 = <Array<File>>file.target.files;


    this.image=file.target.files[0]['name'];
  }
  ajouter(){
    const data ={
      
      name:this.cv.name,
      last:this.cv.last,
      position:this.position,
      email:this.cv.email,
      phone:this.cv.phone,
      //offre:this.route.params['value']['id'],
      
      availablestart:this.cv.availablestart,
      cvfile:this.filesToUpload[0].name,
      image:this.filesToUpload1[0].name
        
  }
  console.log('okkkk');
  this.sercv.ajoutercv(localStorage.getItem('iduser'),this.route.params['value']['id'],data).subscribe(res=>{
    console.log(res)
    this.servcimage.pushFileToStorage(this.filesToUpload[0]).subscribe(rest =>{
      console.log(rest)
     
    })
    this.servcimage.pushFileToStorage(this.filesToUpload1[0]).subscribe(rest =>{
      console.log(rest)
      
     
    })
    this.cv=new Cv();
  })
  }

}
