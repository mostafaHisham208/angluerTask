import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
function passwordMatcher(
  pass: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = pass.get('password');
  const confirmControl = pass.get('confirmPassword');

  if (passwordControl?.pristine || confirmControl?.pristine) {
    return null;
  }

  if (passwordControl?.value === confirmControl?.value) {
    return null;
  }
  return { match: true };
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  passwordMessage: string = '';
  UserRegistrationForm: FormGroup;
  private validationMessage = {
    required: 'Please enter your password',
    email: 'Please enter valid password',
  };  constructor(private formbild:FormBuilder){
    this.UserRegistrationForm=new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      // phone: this.formbild.array(['',Validators.required,Validators.pattern("^01[0-2]\d{1,8}$")]),
      passwordGroup:new FormGroup(
        {
          password:new FormControl('',[Validators.required]),
          // confirmPassword:new FormControl('',[ Validators.required]),
        }
        // { validator: passwordMatcher }
      ),
      address:new FormGroup({
         city:new FormControl('',[Validators.required]),
         postalcode:new FormControl('',[Validators.required]),
         street:new FormControl('',[Validators.required])
      }),

    });

  }
  get phone(): FormArray {
    return this.UserRegistrationForm.get('phone') as FormArray;
  }
  setMessage(pass: AbstractControl): void {
    this.passwordMessage = '';
    if ((pass.touched || pass.dirty) && pass.errors) {
      this.passwordMessage = this.validationMessage.required;
      console.log(this.passwordMessage);
    }
  }
  newphone(): FormGroup {
    return this.formbild.group({
      phone: '',
    });
  }
  addphone() {
    // error here only add () to newAddress
    this.phone.push(this.newphone());
  }
  removephone(num: number) {
    this.phone.removeAt(num);
    console.log(num);

  }
}
