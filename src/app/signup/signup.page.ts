import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';
import { validateEventsArray } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
public email: any;
public password: any;
public name: any;
  constructor(
    public router:Router,
    public fireservice: FireserviceService
  ) { }

  ngOnInit() {
  }
signup(){
  this.fireservice.signup({email:this.email,password:this.password})
  .then(res => {
    if(res.user.uid){
      let data = {
        email: this.email,
        password: this.password,
        name: this.name,
        uid: res.user.uid
      }
      this.fireservice.saveDetails(data).then(res=> {
        alert('Account Created');
        this.router.navigateByUrl('');
      },err=>{
   console.log(err);
      })
    }
  },err=>{
alert("These data are not valid.Try again");
console.log(err);
  })
}
login(){
  this.router.navigateByUrl('');
}
}
