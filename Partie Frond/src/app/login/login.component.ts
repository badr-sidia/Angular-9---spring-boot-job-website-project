import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../services/condidat.service';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  id;
  constructor(private service:CondidatService, private fb: FormBuilder, private  router: Router) { }

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
      sessionStorage.setItem('idcd',this.id)
            this.router.navigate(['/']);
  });

}
}
