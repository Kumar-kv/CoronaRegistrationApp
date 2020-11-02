import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BindingFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  submitted:boolean=false; // By default we consider the form submission as BindingFlags. This is later used in html for form field validation
  //private router:Router part is needed when we need to route to any page as such. need to reed more on Router
  constructor(
    private router:Router,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(){
    this.registrationForm = this.fb.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
      people:['',Validators.required]
    });
    console.log(this.registrationForm.controls);
  }

  // function to return registrationFom control easily
  get f(){
    return this.registrationForm.controls;
  }

  //Register Fucntion to validate and navigate to Success Page
  OnRegister() {
  this.submitted=true;
  // console.log(this.registrationForm);
  if (this.registrationForm.invalid) {
    // console.log(this.registrationForm);
    return;
  }
  this.router.navigate(['success']);
  }

}
