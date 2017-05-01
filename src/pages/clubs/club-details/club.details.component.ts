import { Club } from './../../../models/club.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'club-details',
    templateUrl : 'club.details.html'
})
export class ClubDetailsComponent implements OnInit {
    @Input()
    club : Club;

    constructor(){
    }

    ngOnInit() {
    }

}