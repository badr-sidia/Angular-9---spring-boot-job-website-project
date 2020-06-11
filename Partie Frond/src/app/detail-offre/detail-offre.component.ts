import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { Offre } from '../models/offre';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit {
   id
   offre:Offre
  constructor(private route:ActivatedRoute,
    private offreService:OffreService) { }

  ngOnInit(): void {
    this.id=this.route.params['value']['id'];
    this.offreService.getbyido(this.id).subscribe(
      offre=>{
        this.offre=offre
        console.log(this.offre)
      }
    )
  }

}
