import { Component, OnInit } from '@angular/core';
import { Condidat } from '../models/condidat';
import { ActivatedRoute } from '@angular/router';
import { CondidatService } from '../services/condidat.service';

@Component({
  selector: 'app-detail-condidat',
  templateUrl: './detail-condidat.component.html',
  styleUrls: ['./detail-condidat.component.css']
})
export class DetailCondidatComponent implements OnInit {
  id
  condidat:Condidat

 constructor(private route:ActivatedRoute,
   private condidatService:CondidatService) { }

 ngOnInit(): void {
   this.id=this.route.params['value']['id'];
   this.condidatService.getbyido(this.id).subscribe(
     condidat=>{
       this.condidat=condidat
       console.log(this.condidat)
     }
   )
 }

}
