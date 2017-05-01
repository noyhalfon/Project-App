import { LoginComponent } from './../login/login.component';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Component({
    selector: 'signup',
    templateUrl : 'signup.html'
})
export class SignupComponent{
    formData : FormGroup;

    constructor(private fBuilder : FormBuilder, private http: Http, private navCtrl : NavController) {
        this.formData = fBuilder.group({
            'id': ["", Validators.required],
            'firstName': ["", Validators.required],
            'lastName': ["", Validators.required],
            'password': ["", Validators.required],
            'address': ["", Validators.required],
            'email': ["", Validators.required],
            'phone': ["", Validators.required],
            'birthday': ["", Validators.required],

        })
    }

    submitSingup() {
        // if(this.formData.status == "INVALID"){
        //     return;
        // }

        const idVal = this.formData.value.id;
        const firstNameVal = this.formData.value.firstName;
        const lastNameVal = this.formData.value.lastName;
        const passwordVal = this.formData.value.password;
        const addressVal = this.formData.value.address;
        const emailVal = this.formData.value.email;
        const phoneVal = this.formData.value.phone;
        const birthdayVal = this.formData.value.birthday;

        this.http.post('http://localhost:3000/api/index/singup', {
            id: idVal,
            firstName: firstNameVal,
            lastName: lastNameVal,
            password: passwordVal,
            address: addressVal,
            email: emailVal,
            phone: phoneVal,
            birthday: birthdayVal

        }).map(response => response.json())
        .subscribe(isAuth => {
            if(isAuth.isAuth){
                console.log("User singup");
            }
            else{
                console.log("Singup failed");
            }
        })
    }

    goToLoginPage() {
        this.navCtrl.setRoot(LoginComponent);
    }
}