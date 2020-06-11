import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule}from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'ng2-file-upload';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import { CuruculumComponent } from './curuculum/curuculum.component';
import { LoginrecComponent } from './loginrec/loginrec.component';
import { CondidatesComponent } from './condidates/condidates.component';
import { PostJobComponent } from './post-job/post-job.component';
import { OffreCondidatComponent } from './offre-condidat/offre-condidat.component';
import { ContactComponent } from './contact/contact.component';
import { TrainComponent } from './train/train.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { DetailCondidatComponent } from './detail-condidat/detail-condidat.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ContainerComponent,
    DetailOffreComponent,
    CuruculumComponent,
    LoginrecComponent,
    CondidatesComponent,
    PostJobComponent,
    OffreCondidatComponent,
    ContactComponent,
    TrainComponent,
    DetailsUploadComponent,
    DetailCondidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule ,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    FileUploadModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
],
})
export class AppModule { }
