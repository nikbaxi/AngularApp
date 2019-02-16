import {AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// tslint:disable-next-line:class-name
export class passwordConfirmValidators {
    static conPWD (control: AbstractControl) {
        const newPwd = control.get('newPassword');
        const conPwd = control.get('conPassword');

        if (newPwd.value !== conPwd.value ) {
            return { notSame: true };
        return null;
        }
    }
}

