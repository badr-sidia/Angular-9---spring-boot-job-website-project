import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { Recruteur } from '../models/recruteur';
import { OffreService } from '../services/offre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  position;
  cvfile;
  image;
  offre=new Offre();
  idcondidat;
  recruteur=new Recruteur();
    constructor(private serviceoffre :OffreService,
      private route:ActivatedRoute) {
     
     }

  ngOnInit(): void {
  }title:string;
  duree :string;
  societe:string;
   localisation :string;
    description:string;

  ajouter(){
    const data ={
      
      title:this.offre.title,
      duree:this.offre.duree,
      societe:this.offre.societe,
      localisation:this.offre.localisation,
      description:this.offre.description
      
        
  }
  
  this.serviceoffre.ajoutercv(localStorage.getItem('idrec'),data).subscribe(res=>{
    console.log(res)
  })
  }
}
