import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passwordValidators } from '../Common/password.validators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})

export class PasswordFormComponent {

  form = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
      passwordValidators.validOldPassword
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)
    ]),
    conPassword: new FormControl('', [
      Validators.required,
      // Validators.minLength(4),
      // Validators.maxLength(8),
    ], passwordValidators.passwordShouldMatch )
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get newPasswordValue() {
    return this.newPassword.value();
  }

  get conPassword() {
    return this.form.get('conPassword');
  }
}
