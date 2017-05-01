import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http : Http) {

    }

    getUserById(userId : number) : Observable<User> {
        return this.http.get(`http://localhost:3000/api/users/${userId}`)
        .map(res => res.json());
    }
    updateUser(user : User) : Observable<boolean> {
        return this.http.post('http://localhost:3000/api/users/update', { user: user })
        .map( res => res.json());
    }
}