import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidator } from './username.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent{
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContaintSpace
    ], UsernameValidator.shouldBeUnique),
    password: new FormControl('',Validators.required)
  });

  login(){
    // let isValid =  authService.login(this.form.value); 
    // if(!isValid){
      this.form.setErrors({
        invalidLogin: true
      })
    // }
  }

  get username(){
    return this.form.get('username');
  }
}
