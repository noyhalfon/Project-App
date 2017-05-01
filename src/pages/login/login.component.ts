import { DashboardComponent } from './../dashboard/dashboard.component';
import { SignupComponent } from './../signup/signup.component';
import { NavController } from 'ionic-angular';
import { SigningService } from './../../services/signing.service';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

import 'rxjs/add/operator/map';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    formData : FormGroup;

    constructor(private fBuilder : FormBuilder, private http: Http, private signService : SigningService, private navCtrl : NavController) {
        this.formData = fBuilder.group({
            'email': ["", Validators.required],
            'password' : ["", Validators.required]
        })
    }

    submitLogin() {
        // if (this.formData.status === "INVALID")
        //     return;
        const emailVal = this.formData.value.email;
        const passwordVal = this.formData.value.password;


        this.signService.loginUser(emailVal, passwordVal)
        .subscribe(response => {
            if (response.isAuth) {
                let user = response.customer;
                this.navCtrl.setRoot(DashboardComponent, {
                    user: user
                });
            }
            else {
                console.log('not');
            }
        });
    }

    goToSignUpPage() {
        this.navCtrl.setRoot(SignupComponent);
    }
}