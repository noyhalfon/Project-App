import { Club } from './../models/club.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClubService {
    constructor(private http : Http) {
    }

    getClubsByUserId(userId : number) : Observable<any> {
        return this.http.get(`http://localhost:3000/api/club/user/${userId}`)
        .map(response => response.json());
    }
    
    getClubs() : Observable<Club[]> {
        return this.http.get('http://localhost:3000/api/club')
        .map(res => res.json());
    }
}