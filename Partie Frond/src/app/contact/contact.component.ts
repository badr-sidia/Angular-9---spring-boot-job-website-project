import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { RecruteurService } from '../services/recruteur.service';
import { ActivatedRoute } from '@angular/router';
import { Recruteur } from '../models/recruteur';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact=new Contact();
recruteur:Recruteur
  constructor(private service :ContactService,private recservice:RecruteurService,
    private route:ActivatedRoute,private adminservice:AdminService) { }

  ngOnInit() {
    this.recservice.getRecbyid(this.route.params['value']['id']).subscribe(
      recruteur=>{
        this.recruteur=recruteur;
        console.log(this.recruteur)
      }
    )
  }

  ajouter(){
    const data ={
      from:this.contact.from,
      to:this.recruteur.email,
      subject:this.contact.subject,
      content:this.contact.content,
        
  }
  this.adminservice.connexion(data).subscribe(res=>{
    console.log(res)
    this.contact=new Contact();
  })
}
}