
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import { CuruculumComponent } from './curuculum/curuculum.component';
import { LoginrecComponent } from './loginrec/loginrec.component';
import { CondidatesComponent } from './condidates/condidates.component';
import { PostJobComponent } from './post-job/post-job.component';
import { OffreCondidatComponent } from './offre-condidat/offre-condidat.component';
import { ContactComponent } from './contact/contact.component';
import {TrainComponent} from './train/train.component';
import { DetailCondidatComponent } from './detail-condidat/detail-condidat.component';
const routes: Routes = [{path: '' , component : HomeComponent ,children :[
    {path: '' , component : ContainerComponent},
    {path:'condidate',component:CondidatesComponent},
    {path:'image',component:TrainComponent},
    {path:'new-post',component:PostJobComponent},
    {path:'detail-Offre/:id',component:DetailOffreComponent},
    {path:'detail-condidat/:id',component:DetailCondidatComponent},
    {path:'curuculum/:id',component:CuruculumComponent},
    {path:'candidats/:id',component:OffreCondidatComponent},
    {path:'contact/:id',component:ContactComponent}
    
    
  ]},
  {path: 'login' , component : LoginComponent},
  {path: 'login-rec' , component : LoginrecComponent}
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }