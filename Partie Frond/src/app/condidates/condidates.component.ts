import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';
import { Offre } from '../models/offre';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-condidates',
  templateUrl: './condidates.component.html',
  styleUrls: ['./condidates.component.css']
})
export class CondidatesComponent implements OnInit {
offres
files
  constructor(private offreservice:OffreService,private imageservice:ImageService) { }

  ngOnInit(): void {
    this.imageservice.getFiles().subscribe(
      files=>{
        this.files=files
      }
    )
    this.offreservice.getalloffreByRec(sessionStorage.getItem('idrec')).subscribe(
      offres=>{
        this.offres=offres;
      }
    )
  }

}
