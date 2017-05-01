import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SigningService {
    constructor(private http: Http) {

    }

    signUpUser(user : User) : Observable<any> {
        return this.http.post('http://localhost:3000/api/index/signup', {
            user : user
        }).map(response => response.json())
    }

    loginUser(email : string, password : string) : Observable<any> {
        return this.http.post('http://localhost:3000/api/index', {
            email : email,
            password : password
        }).map(response => response.json())
    }
}