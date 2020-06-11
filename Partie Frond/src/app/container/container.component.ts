import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { OffreService } from '../services/offre.service';
import { Condidat } from '../models/condidat';
import { CondidatService } from '../services/condidat.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  offres /*= [
    {
      id: 0,
      title:'Full stack developer',
      duree:'Temporary',
      societe:'New York Times',
      localisation:'New York City, USA',
      
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: 1,
      title:'Open Source Interactive Developer',
      duree:'Temporary',
      societe:'New York Times',
      localisation:'New York City, USA',
      
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: 2,
      title:'Frontend Development',
      duree:'Part time',
      societe:'Facebook, Inc.',
      localisation:'New York City, USA',
      
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: 9,
      title:'Full stack developer',
      duree:'Full Time',
      societe:'Google, Inc.',
      localisation:'New York City, USA',
      
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    }]*/
    idrec;
    idcd
    filters:Offre[]
    filtersc:Condidat[]
    offre=new Offre()
    condidat=new Condidat()
listeoffre:Offre[]
  constructor(private service:OffreService,
    private condidatservice:CondidatService) { 
    this.idrec=sessionStorage.getItem('idrec');
    this.idcd=sessionStorage.getItem('idcd');
    console.log(this.idrec)
  }

  ngOnInit(): void {
    this.service.getalloffre().subscribe(
      offres=>{
        this.offres=offres
      }
    )
  }
  findJob(){
    
    const data ={
      
      title:this.offre.title,
      duree:this.offre.duree,
      localisation:this.offre.localisation,
      societe:'',
      description:'',
      r:''        
  }
  console.log(data);
 this.service.getbyfilter(data).subscribe(res=>{
    console.log(res)
    this.filters=res
     
    })
  }
  findCondidate(){
    
    const data ={
      
      nom:this.condidat.nom,
      formation:this.condidat.formation      
  }
  console.log(data);
 this.condidatservice.getbyfilter(data).subscribe(res=>{
    console.log(res)
    this.filtersc=res
     
    })
    
   
  
  }
 
}
