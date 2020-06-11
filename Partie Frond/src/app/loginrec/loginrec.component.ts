import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../services/condidat.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RecruteurService } from '../services/recruteur.service';
@Component({
  selector: 'app-loginrec',
  templateUrl: './loginrec.component.html',
  styleUrls: ['./loginrec.component.css']
})
export class LoginrecComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  id;
  constructor(private service:RecruteurService, private fb: FormBuilder, private  router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);

    this.service.connexion(this.loginForm.value).subscribe(res => {

      console.log(res);
      this.id=res['id']
      console.log(this.id);
      sessionStorage.setItem('idrec',this.id)
            this.router.navigate(['/']);
  });

}
}
