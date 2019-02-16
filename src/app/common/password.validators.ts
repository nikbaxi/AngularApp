import { AbstractControl, ValidationErrors, Validators, FormGroup } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { promise } from 'selenium-webdriver';
import { resolve } from 'path';
import { reject } from 'q';

// tslint:disable-next-line:class-name
export class passwordValidators {
    static validOldPassword(control: AbstractControl): ValidationErrors|null {
        if (control.value !== '1234') {
            return { invalidPassword: true };
        return null;
        }
    }
    static passwordShouldMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise((resolve) => {
            // tslint:disable-next-line:prefer-const
            const newPassword = control.get('newPassword');
            // tslint:disable-next-line:prefer-const
            const confirmPassword = control.get('conPassword');

            if (newPassword.value !== confirmPassword.value) {
                resolve({passwordShouldMatch: false});
            } else {
                resolve(null);
            }
        });
    }
}
