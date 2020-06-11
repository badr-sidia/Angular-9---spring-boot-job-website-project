import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ImageService } from '../services/image.service';

 
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
 
  showFile = false
  fileUploads: Observable<string[]>
 
  constructor(private uploadService: ImageService) {}
 
  ngOnInit() {
  }
 
  showFiles(enable: boolean) {
    this.showFile = enable
 
    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}